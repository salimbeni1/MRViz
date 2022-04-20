import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return <>
  

    <div className={styles.header}>
      <img className={styles.logo} src = "mrviz_logo.svg"  alt="MRViz logo"/>
      <img className={styles.title} src = "mrviz_title.svg" alt="MRViz title"/>
      <img className={styles.logo} src = "mrviz_logo.svg"  alt="MRViz logo"/>
    </div>


    <div className={styles.introdemo}>
      <h3>...VIDEO...</h3>
    </div>

    <div className={styles.infobloc}>
      <div className={styles.paragraph}>
          <img className={styles.logo} src = "mrviz_logo.svg"  alt="MRViz logo"/>
          <p> Nowadays, engineers developing robotics software have a serious constraint.
              They can visualize the robot's perception of the environment, but cannot have
              a straightforward impression of the difference between such perceived data and
              the real physical world. They often have to rely on uninformative visualizations
              of point clouds or heatmaps on a computer screen with no additional information about
              the robot's surroundings, making it rather difficult to find the flaws and debug the system. </p>
      </div>


      <div className={styles.paragraph}>
          <img className={styles.logo} src = "mrviz_logo.svg"  alt="MRViz logo"/>
          <p> Thanks to our toolkit, which overlays the robot's sensed data onto the real world,
             robotics engineers will benefit from seeing directly what their robot perceives by exploring
              the environment around them with HoloLens. Such feature will simplify the development of ROS 
              (Robot Operating System) software, allowing engineers to fully leverage sensor data by visualizing
               them in the mixed reality. </p>
          
      </div>


      <div className={styles.paragraph}>
          <img className={styles.logo} src = "mrviz_logo.svg"  alt="MRViz logo"/>
          <p> We plan to visualize one type of messages for the time being, focusing 
            on the other types later. Also, we are considering the possibility of combining together
             the visualizations of several message types, allowing more complex and informative evaluations
              of the robot's environment perception. </p>
          
      </div>


      <div className={styles.paragraph}>
          <img className={styles.logo} src = "mrviz_logo.svg"  alt="MRViz logo"/>
          <p> Next, we will focus more on visualizing the perceived data, locating HoloLens,
             and tracking robot position.  </p>
      </div>


    </div>
  
  
  
  
  </>
   
  
}
