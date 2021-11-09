import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { FC, Suspense, useRef, useState } from 'react';
import styled from 'styled-components';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model: FC = () => {
  const ref = useRef(null);
  const gltf = useLoader(GLTFLoader, './model/scene.gltf');
  useFrame(() => {
    ref.current.rotation.x += 0.002;
    ref.current.rotation.y += 0.002;
  });

  return <primitive ref={ref} object={gltf.scene} scale={50} />;
};

const PlanesModel: FC = () => {
  const [zoom, setZoom] = useState<boolean>(false);

  return (
    <Container z={zoom}>
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
        </Suspense>
      </Canvas>
      <Button title={`zoom-${zoom ? 'out' : 'in'}`} onClick={() => setZoom((x) => !x)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Button>
    </Container>
  );
};

export default PlanesModel;

const Container = styled.div<{ z: boolean }>`
  position: relative;
  width: 100%;
  height: ${({ z }) => (z ? 'calc(100vh - 55px)' : '250px')};
  margin-bottom: 2rem;
  cursor: pointer;
  background-position: center;
  background-color: ${({ theme }) => (theme.mode === 'dark' ? '#000' : '#eee')};
  transition: height 0.35s;

  @media (min-width: 481px) {
    height: ${({ z }) => (z ? 'calc(100vh - 65px)' : '250px')};
  }
`;

const Button = styled.button`
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;

  width: 2.3rem;
  height: 2.3rem;
  border: none;

  cursor: pointer;
  background-color: transparent;

  &:focus {
    outline: none;
  }
  span {
    position: absolute;
    --bg: ${({ theme }) => (theme.mode === 'dark' ? '#fff' : '#333')};

    &:nth-child(1),
    &:nth-child(2) {
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(
        to right,
        var(--bg) 0,
        var(--bg) 40%,
        transparent 40%,
        transparent 60%,
        var(--bg) 60%,
        var(--bg) 100%
      );
    }

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2) {
      bottom: 0;
    }

    &:nth-child(3),
    &:nth-child(4) {
      top: 0;
      width: 2px;
      height: 100%;

      background: linear-gradient(
        to bottom,
        var(--bg) 0,
        var(--bg) 40%,
        transparent 40%,
        transparent 60%,
        var(--bg) 60%,
        var(--bg) 100%
      );
    }

    &:nth-child(3) {
      left: 0;
    }
    &:nth-child(4) {
      right: 0;
    }
  }
`;
