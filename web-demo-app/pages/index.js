import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import { Canvas } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Sphere,
  OrbitControls,
  OrthographicCamera,
  PresentationControls,
} from "@react-three/drei";
import Mrviz_logo from '../model3d/Mrviz_logo';

const get_logo = () => {

  return <Canvas dpr={[1, 2]} orthographic camera={{ position: [-10, 10, 10], zoom: 100 }} >
        <PresentationControls global zoom={0.5} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
          <Mrviz_logo rotation={[0, -Math.PI / 4, 0]} scale={0.09} />
        </PresentationControls>  
    </Canvas>
  
}


export default function Home() {
  return <>

    
  

    <div className={styles.header}>
      <div className={styles.logo} > {get_logo()} </div>
      <h1> MRViz </h1>
      <div className={styles.logo} > {get_logo()} </div>
    </div>


    <div className={styles.introdemo}>
      <h3>...VIDEO...</h3>
    </div>

    <div className={styles.infobloc}>
      <div className={styles.paragraph}>
          <div className={styles.logo} > {get_logo()} </div>
          <p> Nowadays, engineers developing robotics software have a serious constraint.
              They can visualize the robot s perception of the environment, but cannot have
              a straightforward impression of the difference between such perceived data and
              the real physical world. They often have to rely on uninformative visualizations
              of point clouds or heatmaps on a computer screen with no additional information about
              the robot s surroundings, making it rather difficult to find the flaws and debug the system.</p>
      </div>


      <div className={styles.paragraph}>
          <div className={styles.logo} > {get_logo()} </div>
          <p> Thanks to our toolkit, which overlays the robot s sensed data onto the real world,
             robotics engineers will benefit from seeing directly what their robot perceives by exploring
              the environment around them with HoloLens. Such feature will simplify the development of ROS 
              (Robot Operating System) software, allowing engineers to fully leverage sensor data by visualizing
               them in the mixed reality. </p>
          
      </div>


      <div className={styles.paragraph}>
          <div className={styles.logo} > {get_logo()} </div>
          <p> We plan to visualize one type of messages for the time being, focusing 
            on the other types later. Also, we are considering the possibility of combining together
             the visualizations of several message types, allowing more complex and informative evaluations
              of the robot s environment perception. </p>
          
      </div>


      <div className={styles.paragraph}>
          <div className={styles.logo} > {get_logo()} </div>
          <p> Next, we will focus more on visualizing the perceived data, locating HoloLens,
             and tracking robot position.  </p>
      </div>


    </div>
  
  
  
  
  </>
   
  
}
