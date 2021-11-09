import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { FC, Suspense } from 'react';
import styled from 'styled-components';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { fadeIn } from '../styles';

const Model: FC = () => {
  const gltf = useLoader(GLTFLoader, './model/scene.gltf');

  return <primitive object={gltf.scene} scale={50} />;
};

const PlanesModel: FC = () => {
  return (
    <Container>
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </Container>
  );
};

export default PlanesModel;

const Container = styled.div`
  width: 100%;
  height: 250px;
  margin-bottom: 2rem;
  cursor: pointer;
  background-position: center;
  animation: ${fadeIn} 0.5s linear;
`;
