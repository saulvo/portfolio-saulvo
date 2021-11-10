import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { FC, Suspense, useEffect, useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Button, Container } from './styles';

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

  useEffect(() => {
    const html: HTMLElement = document.querySelector('html');

    if (zoom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      html.style.overflow = 'hidden';
    } else {
      html.style.overflow = '';
    }

    return () => {
      html.style.overflow = '';
    };
  }, [zoom]);
  return (
    <>
      <Container z={zoom}>
        <Canvas>
          <Suspense fallback={null}>
            <Model />
            <OrbitControls />
          </Suspense>
        </Canvas>
        <Button
          className={`zoom-${zoom ? 'out' : 'in'}`}
          title={`zoom-${zoom ? 'out' : 'in'}`}
          onClick={() => setZoom((x) => !x)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Button>
      </Container>
    </>
  );
};

export default PlanesModel;
