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
  Box,
} from "@react-three/drei";
import Mrviz_logo from '../model3d/Mrviz_logo';
import Mrviz_world from '../model3d/Mrviz_world';

const get_logo = () => {

  return <Canvas dpr={[1, 2]} orthographic camera={{ position: [-10, 10, 10], zoom: 100 }} >
        <PresentationControls global zoom={0.5} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
          <Mrviz_logo rotation={[0, -Math.PI / 4, 0]} scale={0.09} />
        </PresentationControls>  
    </Canvas>
  
}

const get_point = () => {

  return <div style={{height:"10px" , width:"10px", backgroundColor:"#6495ED" , margin:"20px"}}/>

  return <Canvas dpr={[1, 2]} orthographic camera={{ position: [-10, 10, 10], zoom: 20 }} >
        <ambientLight intensity={1}/>
        <directionalLight position={[100, 100, 100]} intensity={1} color="white"/>
          
        <Box>
          <meshStandardMaterial color={'blue'} />
        </Box>

        <OrbitControls />
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

    <div style={{position:"relative" , height:"300px"}}>
      <Canvas dpr={[1, 2]} orthographic camera={{ position: [200, 80, -100], zoom: 100 }} >
          
          <directionalLight position={[100, 100, 100]} intensity={1} color="white"/>
          <ambientLight/>
          <Mrviz_world angry rotation={[0, 0 ,  0 ]} scale={0.15} />

          <OrbitControls enableZoom={false}/>
        
    </Canvas>
    </div>

    <div className={styles.infobloc}>

      <h2> Background </h2>

      <div className={styles.paragraph}>
          <div className={styles.logo} > {get_point()} </div>
          <p> Nowadays, engineers developing robotics software have a serious constraint.
              They can visualize the robot{"'"}s perception of the environment, but cannot have
              a straightforward impression of the difference between such perceived data and
              the real physical world. They often have to rely on uninformative visualizations
              of point clouds or heatmaps on a computer screen with no additional information about
              the robot s surroundings, making it rather difficult to find the flaws and debug the system.
              </p>
      </div>
    
    </div>




    <div style={{position:"relative" , height:"300px"}}>
      <Canvas dpr={[1, 2]} orthographic camera={{ position: [200, 80, -100], zoom: 100 }} >
          
          <directionalLight position={[100, 100, 100]} intensity={1} color="white"/>
          <ambientLight/>
          <Mrviz_world pc wpc phoneMan rotation={[0, 0 ,  0 ]} scale={0.15} />

          <OrbitControls enableZoom={false}/>
        
    </Canvas>
    </div>

    <div className={styles.infobloc}>

      <h2> Introduction </h2>

      <div className={styles.paragraph}>
          <div className={styles.logo} > {get_point()} </div>
          <p> Thanks to our toolkit, which overlays the robot{"'"}s sensed data onto the real world,
             robotics engineers will benefit from seeing directly what their robot perceives by exploring
              the environment around them with HoloLens. Such feature will simplify the development of ROS 
              (Robot Operating System) software, allowing engineers to fully leverage sensor data by visualizing
               them in the mixed reality. </p>
          
      </div>


      <div className={styles.paragraph}>
          <div className={styles.logo} > {get_point()} </div>
          <p> The most challenging, yet most interesting part of this project is the sensor visualization fusion to the real world, 
            or the {'"calibration"'} between visualization and the reality.
          </p>
      </div>
      
      <div className={styles.paragraph}>
          <div className={styles.logo} > {get_point()} </div>
          <p> ROS sensors topics contain in their metadata information about the position of 
            the sensors relative to an point in the robot or the world.
            Based on whether there is available transform data from the robot, 
            we can locate the visualization in two ways.  </p>
      </div>
      

    </div>

    <div style={{position:"relative" , height:"300px"}}>
      <Canvas dpr={[1, 2]} orthographic camera={{ position: [200, 80, -100], zoom: 100 }} >
          
          <directionalLight position={[100, 100, 100]} intensity={1} color="white"/>
          <ambientLight/>
          <Mrviz_world pc base_frame phoneMan rotation={[0, 0 ,  0 ]} scale={0.15} />

          <OrbitControls enableZoom={false}/>
        
      </Canvas>
    </div>

    <div className={styles.infobloc}>
      
        <h2> World frame anchor </h2>


      <div className={styles.paragraph}>
          <div className={styles.logo} > {get_point()} </div>
          <p> 
            In the easiest scenario, the running odometry estimators running on the robot provide usable transform data. 
            As the robot runs, the position of the sensors in the world frame is also known. 
            The position and orientation for every type of visualization is handled automatically.
        </p>
      </div>


      <div className={styles.paragraph}>
          <div className={styles.logo} > {get_point()} </div>
          <p> In this case the user can manually position and orient a static anchor, 
            and place it to the {'"reference point"'} the ROS transforms are mapping to.  
            </p>
      </div>


    </div>

    <div style={{position:"relative" , height:"300px"}}>
      <Canvas dpr={[1, 2]} orthographic camera={{ position: [200, 80, -100], zoom: 100 }} >
          
          <directionalLight position={[100, 100, 100]} intensity={1} color="white"/>
          <ambientLight/>
          <Mrviz_world pc world_frame phoneMan rotation={[0, 0 ,  0 ]} scale={0.15} />

          <OrbitControls enableZoom={false}/>
        
    </Canvas>
    </div>
    

    <div className={styles.infobloc}>

      <h2> Robot frame anchor </h2>

      <div className={styles.paragraph}>
          <div className={styles.logo} > {get_point()} </div>
          <p> If the robot is not aware of its position, 
            it is up to us to get an estimation of the robot odometry to map it in the augmented reality scene.
            </p>
      </div>

      <div className={styles.paragraph}>
          <div className={styles.logo} > {get_point()} </div>
          <p> In this case, we track the robot position by exploiting undistorted images or 3D object tracking methods. 
            The sensor visualisions are then transformed to the moving anchor that follows the robot.  
            </p>
      </div>

    </div>
  
  </>
  
}
