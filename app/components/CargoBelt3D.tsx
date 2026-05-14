import { useEffect, useRef, FC, CSSProperties } from 'react';
import * as THREE from 'three';
import { MotionValue } from 'framer-motion';

// ─── Public types ────────────────────────────────────────────────

export type BoxKind = 'cardboard' | 'white' | 'color' | 'luxury';

export interface BoxConfig {
  size: [number, number, number];
  kind: BoxKind;
  label: string;
  sub: string;
  dest?: string;
  tracking: string;
  accent: string;
  zPos: number;
  boxColor?: string;
  rotY?: number;
}

export interface CargoBelt3DProps {
  className?: string;
  style?: CSSProperties;
  speed?: number;
  scrollProgress?: MotionValue<number> | number;
  manifest?: BoxConfig[];
  isBackground?: boolean;
}

// ─── Default manifest (Customized for JBS) ────────────────────────────

const DEFAULT_MANIFEST: BoxConfig[] = [
  { size:[1.15,0.90,1.00], kind:'cardboard', label:'DELHI',   sub:'Express Overnight',   dest:'New Delhi, IN 110061', tracking:'JBS-2024-001', accent:'#E86A2F', zPos: 0.85 },
  { size:[0.88,0.88,0.88], kind:'white',     label:'MUMBAI',  sub:'Priority Tracked',    dest:'Mumbai, IN 400001',    tracking:'JBS-2024-002', accent:'#2563EB', zPos:-0.65 },
  { size:[0.60,1.28,0.65], kind:'cardboard', label:'CHENNAI', sub:'Standard Ground',     dest:'Chennai, IN 600001',   tracking:'JBS-2024-003', accent:'#16A34A', zPos: 0.22 },
  { size:[1.58,0.52,1.00], kind:'color',     label:'EXPRESS', sub:'Next Day Air',         dest:undefined,              tracking:'JBS-2024-004', accent:'#38BDF8', zPos:-0.78, boxColor:'#0F3460' },
  { size:[1.02,0.82,0.92], kind:'luxury',    label:'PREMIUM', sub:'Insured / Biometric',  dest:undefined,              tracking:'JBS-2024-005', accent:'#E86A2F', zPos: 0.55, boxColor:'#1A1A1A' },
  { size:[0.80,0.58,0.80], kind:'color',     label:'URGENT',  sub:'Same Day',             dest:undefined,              tracking:'JBS-2024-006', accent:'#FCA5A5', zPos:-0.25, boxColor:'#991B1B' },
  { size:[1.38,0.98,1.08], kind:'cardboard', label:'KOLKATA', sub:'Economy Freight',     dest:'Kolkata, IN 700001',   tracking:'JBS-2024-007', accent:'#F59E0B', zPos: 0.90 },
  { size:[0.72,0.72,0.72], kind:'white',     label:'SECURE',  sub:'Biometric Lock',      dest:'Bangalore, IN 560001', tracking:'JBS-2024-008', accent:'#7C3AED', zPos:-0.80 },
  { size:[1.12,0.74,0.90], kind:'color',     label:'PARCEL',  sub:'Economy Air',          dest:undefined,              tracking:'JBS-2024-009', accent:'#34D399', zPos: 0.35, boxColor:'#064E3B' },
  { size:[0.95,1.05,0.88], kind:'cardboard', label:'HYDERABAD', sub:'Signature Required', dest:'Hyderabad, IN 500001', tracking:'JBS-2024-010', accent:'#EC4899', zPos:-0.48 },
];

// ─── Utility helpers ─────────────────────────────────────────────

function hexToRgb(hex: string): [number, number, number] {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
}

function shiftBrightness(hex: string, amt: number): string {
  const [r, g, b] = hexToRgb(hex);
  const s = (v: number) => Math.min(255, Math.max(0, Math.round(v + amt * 255)));
  return `rgb(${s(r)},${s(g)},${s(b)})`;
}

function barcode(ctx: CanvasRenderingContext2D, x: number, y: number, h: number, color: string) {
  const pattern = [3,1,2,1,1,4,1,1,3,1,2,1,4,1,2,1,1,3,2,1,1,3,4,1,2,1,3,1,1,4,2];
  let cx = x;
  pattern.forEach((w, i) => {
    if (i % 2 === 0) {
      ctx.fillStyle = color;
      ctx.fillRect(cx, y, w * 2.6, h);
    }
    cx += w * 2.6;
  });
}

function tapeStrip(ctx: CanvasRenderingContext2D, y: number, h: number, W: number) {
  const tg = ctx.createLinearGradient(0, y, 0, y + h);
  tg.addColorStop(0,   'rgba(234,218,164,0.90)');
  tg.addColorStop(0.5, 'rgba(228,210,152,0.84)');
  tg.addColorStop(1,   'rgba(214,196,136,0.76)');
  ctx.fillStyle = tg;
  ctx.fillRect(0, y, W, h);

  ctx.save();
  ctx.globalAlpha = 0.22;
  for (let xi = -W; xi < W * 2; xi += 7) {
    ctx.strokeStyle = 'rgba(192,170,108,0.7)';
    ctx.lineWidth = 0.5;
    ctx.beginPath(); ctx.moveTo(xi, y); ctx.lineTo(xi + h, y + h); ctx.stroke();
  }
  ctx.restore();

  ctx.strokeStyle = 'rgba(172,146,88,0.48)';
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(0, y + h); ctx.lineTo(W, y + h); ctx.stroke();
}

// ─── Texture factories ───────────────────────────────────────────

function makeBeltTexture(): THREE.CanvasTexture {
  const W = 1024, H = 256;
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const ctx = cv.getContext('2d')!;

  ctx.fillStyle = '#141414';
  ctx.fillRect(0, 0, W, H);

  for (let i = 0; i < 6000; i++) {
    const lum = 10 + Math.random() * 12;
    ctx.fillStyle = `rgba(${lum},${lum},${lum},0.025)`;
    ctx.fillRect(Math.random() * W, Math.random() * H, Math.random() * 2 + 0.5, Math.random() * 2 + 0.5);
  }

  const groove = 9, ridge = 5, period = groove + ridge;
  for (let y = 0; y < H; y += period) {
    ctx.fillStyle = '#0C0C0C';
    ctx.fillRect(0, y, W, groove);

    const rg = ctx.createLinearGradient(0, y + groove, 0, y + groove + ridge);
    rg.addColorStop(0,    '#282828');
    rg.addColorStop(0.25, '#222222');
    rg.addColorStop(1,    '#161616');
    ctx.fillStyle = rg;
    ctx.fillRect(0, y + groove, W, ridge);

    ctx.fillStyle = 'rgba(255,255,255,0.055)';
    ctx.fillRect(0, y + groove, W, 1);
  }

  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(18, 1);
  return tex;
}

function makeShippingLabelTex(cfg: BoxConfig, isWhite: boolean): THREE.CanvasTexture {
  const S = 512;
  const cv = document.createElement('canvas');
  cv.width = cv.height = S;
  const ctx = cv.getContext('2d')!;

  if (isWhite) {
    ctx.fillStyle = '#F6F3EE';
    ctx.fillRect(0, 0, S, S);
  } else {
    const cg = ctx.createLinearGradient(0, 0, S * 0.7, S);
    cg.addColorStop(0, '#C78B3C'); cg.addColorStop(0.45, '#B87830'); cg.addColorStop(1, '#9E6518');
    ctx.fillStyle = cg;
    ctx.fillRect(0, 0, S, S);
  }

  const tapeH = isWhite ? 48 : 52;
  tapeStrip(ctx, 0, tapeH, S);

  const lx = 36, ly = tapeH + 18, lw = S - 72, lh = S - ly - 32;
  if (!isWhite) {
    ctx.fillStyle = 'rgba(60,30,0,0.12)';
    ctx.fillRect(lx + 4, ly + 4, lw, lh);
    ctx.fillStyle = '#FAFAF8';
    ctx.fillRect(lx, ly, lw, lh);
  }

  const tx = isWhite ? 32 : lx + 18;
  const ty = ly + 16;
  const tw = isWhite ? S - 64 : lw - 36;

  ctx.fillStyle = cfg.accent;
  ctx.fillRect(tx, ty, tw, 12);

  ctx.fillStyle = '#AAAAAA';
  ctx.font = '500 15px Arial, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('FROM', tx, ty + 30);
  ctx.fillStyle = '#1C1C1C';
  ctx.font = 'bold 20px Arial, sans-serif';
  ctx.fillText('FRAGILE', tx + 64, ty + 30);

  ctx.fillStyle = '#AAAAAA';
  ctx.font = '500 15px Arial, sans-serif';
  ctx.fillText('TO', tx, ty + 76);
  ctx.fillStyle = '#111111';
  ctx.font = 'bold 26px Arial, sans-serif';
  ctx.fillText(cfg.label, tx + 40, ty + 76);
  ctx.fillStyle = '#555555';
  ctx.font = '15px Arial, sans-serif';
  ctx.fillText(cfg.dest ?? 'PAN-INDIA', tx + 40, ty + 96);

  barcode(ctx, tx, ty + 130, 50, '#1A1A1A');
  ctx.fillStyle = '#AAAAAA';
  ctx.font = '10px "Courier New", monospace';
  ctx.fillText(cfg.tracking, tx, ty + 194);

  return new THREE.CanvasTexture(cv);
}

function makeColorFaceTex(cfg: BoxConfig): THREE.CanvasTexture {
  const S = 512;
  const cv = document.createElement('canvas');
  cv.width = cv.height = S;
  const ctx = cv.getContext('2d')!;
  const color = cfg.boxColor!;

  ctx.fillStyle = color;
  ctx.fillRect(0, 0, S, S);

  const tapeH = 50;
  tapeStrip(ctx, 0, tapeH, S);

  const lx = 44, ly = tapeH + 22, lw = S - 88, lh = S - ly - 40;
  ctx.fillStyle = 'rgba(255,255,255,0.94)';
  ctx.fillRect(lx, ly, lw, lh);

  ctx.fillStyle = cfg.accent;
  ctx.fillRect(lx, ly, lw, 10);

  ctx.fillStyle = '#111';
  ctx.font = 'bold 38px Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(cfg.label, S / 2, ly + 75);

  return new THREE.CanvasTexture(cv);
}

function makeLuxuryFaceTex(cfg: BoxConfig): THREE.CanvasTexture {
  const S = 512;
  const cv = document.createElement('canvas');
  cv.width = cv.height = S;
  const ctx = cv.getContext('2d')!;
  const color = cfg.boxColor ?? '#1A1A1A';

  ctx.fillStyle = color;
  ctx.fillRect(0, 0, S, S);

  const tapeH = 46;
  tapeStrip(ctx, 0, tapeH, S);

  ctx.strokeStyle = cfg.accent;
  ctx.lineWidth = 2;
  ctx.strokeRect(32, tapeH + 16, S - 64, S - tapeH - 36);

  ctx.fillStyle = cfg.accent;
  ctx.font = 'bold 44px Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(cfg.label, S / 2, tapeH + 100);

  return new THREE.CanvasTexture(cv);
}

function makeTopFaceTex(cfg: BoxConfig): THREE.CanvasTexture {
  const S = 256;
  const cv = document.createElement('canvas');
  cv.width = cv.height = S;
  const ctx = cv.getContext('2d')!;

  if (cfg.kind === 'cardboard') {
    ctx.fillStyle = '#AD7025';
  } else if (cfg.kind === 'white') {
    ctx.fillStyle = '#F0EDE7';
  } else {
    ctx.fillStyle = cfg.boxColor ?? '#444444';
  }
  ctx.fillRect(0, 0, S, S);

  const tH = 54, tY = (S - tH) / 2;
  tapeStrip(ctx, tY, tH, S);

  return new THREE.CanvasTexture(cv);
}

// ─── Material helpers ────────────────────────────────────────────

function sideMaterial(cfg: BoxConfig): THREE.MeshStandardMaterial {
  let color: THREE.Color;
  if (cfg.kind === 'cardboard') color = new THREE.Color(0xAD7025);
  else if (cfg.kind === 'white') color = new THREE.Color(0xEEEBE4);
  else color = new THREE.Color(cfg.boxColor).multiplyScalar(0.82);

  return new THREE.MeshStandardMaterial({
    color,
    metalness: cfg.kind === 'luxury' ? 0.05 : 0,
    roughness: cfg.kind === 'luxury' ? 0.85 : 0.92,
  });
}

function buildBoxMaterials(cfg: BoxConfig): THREE.Material[] {
  let frontTex: THREE.CanvasTexture;
  if (cfg.kind === 'luxury') frontTex = makeLuxuryFaceTex(cfg);
  else if (cfg.kind === 'color') frontTex = makeColorFaceTex(cfg);
  else frontTex = makeShippingLabelTex(cfg, cfg.kind === 'white');

  const topTex  = makeTopFaceTex(cfg);
  const side    = sideMaterial(cfg);
  const bot     = side.clone();
  bot.color.multiplyScalar(0.80);

  return [
    side.clone(),
    side.clone(),
    new THREE.MeshStandardMaterial({ map: topTex,   metalness: 0, roughness: 0.92 }),
    bot,
    new THREE.MeshStandardMaterial({ map: frontTex, metalness: 0, roughness: 0.90 }),
    side.clone(),
  ];
}

// ─── Component ───────────────────────────────────────────────────

const CargoBelt3D: FC<CargoBelt3DProps> = ({
  className = '',
  style,
  speed = 0.0055,
  scrollProgress = 0,
  manifest = DEFAULT_MANIFEST,
  isBackground = false
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rafRef   = useRef<number>(0);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const W = el.clientWidth;
    const H = el.clientHeight;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: !isBackground, 
      powerPreference: 'high-performance',
      alpha: true 
    });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled  = true;
    renderer.shadowMap.type     = THREE.PCFSoftShadowMap;
    
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(38, W / H, 0.1, 120);
    camera.position.set(0, 6.5, 13.5);
    camera.lookAt(0, 1.5, 0);

    scene.add(new THREE.HemisphereLight(0xFFF6ED, 0xDAD4C8, 1.2));

    const key = new THREE.DirectionalLight(0xFFF9F2, 2.5);
    key.position.set(14, 22, 10);
    key.castShadow = true;
    key.shadow.mapSize.set(isBackground ? 512 : 1024, isBackground ? 512 : 1024);
    key.shadow.camera.left   = -20; key.shadow.camera.right  =  20;
    key.shadow.camera.top    =  20; key.shadow.camera.bottom = -20;
    key.shadow.bias   = -0.0002;
    key.shadow.radius = 4;
    scene.add(key);

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(100, 100),
      new THREE.MeshStandardMaterial({ color: 0xECE8E1, metalness: 0, roughness: 0.97 }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    const BELT_L   = 26;
    const BELT_W   = 3.6;
    const BELT_Y   = 1.38;

    const beltTex = makeBeltTexture();

    const beltSurf = new THREE.Mesh(
      new THREE.PlaneGeometry(BELT_L, BELT_W),
      new THREE.MeshStandardMaterial({ map: beltTex, metalness: 0.0, roughness: 0.94 }),
    );
    beltSurf.rotation.x = -Math.PI / 2;
    beltSurf.position.y = BELT_Y + 0.004;
    beltSurf.receiveShadow = true;
    scene.add(beltSurf);

    const beltBody = new THREE.Mesh(
      new THREE.BoxGeometry(BELT_L, 0.22, BELT_W),
      new THREE.MeshStandardMaterial({ color: 0x181818, metalness: 0, roughness: 0.96 }),
    );
    beltBody.position.set(0, BELT_Y - 0.11, 0);
    beltBody.castShadow = beltBody.receiveShadow = true;
    scene.add(beltBody);

    const liveBoxes: THREE.Mesh[] = [];
    const spacing = BELT_L / manifest.length;

    manifest.forEach((cfg, i) => {
      const [w, h, d] = cfg.size;
      const box = new THREE.Mesh(
        new THREE.BoxGeometry(w, h, d),
        buildBoxMaterials(cfg),
      );
      box.position.set(
        -BELT_L / 2 + i * spacing + spacing * 0.5,
        BELT_Y + h / 2 + 0.004,
        cfg.zPos,
      );
      box.rotation.y  = cfg.rotY ?? (Math.random() - 0.5) * 0.1;
      box.castShadow    = true;
      box.receiveShadow = true;
      scene.add(box);
      liveBoxes.push(box);
    });

    const loop = () => {
      rafRef.current = requestAnimationFrame(loop);
      
      // Calculate dynamic speed based on scroll
      // Read value from MotionValue if provided, else use number
      const scrollVal = typeof scrollProgress === 'number' 
        ? scrollProgress 
        : (scrollProgress?.get() ?? 0);

      // Base speed + scroll boost (accelerates significantly during scroll)
      const currentSpeed = speed + (scrollVal * 1.5);
      
      beltTex.offset.x -= currentSpeed * 0.28;
      liveBoxes.forEach(b => {
        b.position.x += currentSpeed;
        if (b.position.x > BELT_L / 2 + 2.5) b.position.x = -BELT_L / 2 - 2.5;
      });
      renderer.render(scene, camera);
    };

    loop();

    const onResize = () => {
      renderer.setSize(el.clientWidth, el.clientHeight);
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, [speed, scrollProgress, manifest, isBackground]);

  return (
    <div
      ref={mountRef}
      className={className}
      style={{ width: '100%', height: '100%', overflow: 'hidden', ...style }}
    />
  );
};

export default CargoBelt3D;
