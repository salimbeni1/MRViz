# MRViz

Mixed Reality toolkit for ROS visualization (on Hololens)

[Milestone 1](./milestone_1.pdf) · [Milestone 2](./milestone_2.pdf)

## directory setup

### MRVIZ

main UNITY application

#### Scenes

These two scenes act in the same way. Both visualization will follow the cube in the scene. But:

`MoveWithCube`: Makes the drawing gameObject the child of a cube. Updates smoothly. Only works for robot-centered viz.

`MoveWithTF`: A publisher in the scene will publish the TF-tree based on the position of the cube. Update a little slow beacudse of the publishing frequency. Ideally, this way works for any viz but require some manual configuration.

If you want to test `MoveWithTF` scene, make sure that you have installed the `tf2` package in the docker before you run `rosbag play <DATA_PATH>`.

```sh
sudo apt-get update
sudo apt-get install ros-$ROS_DISTRO-tf2-tools ros-$ROS_DISTRO-tf
```

### ROS

tools to launch ros docker containers as well as their rosbags

~~test:~~
~~directory used to place all UNITY projects used to test individual packages configurations~~

### web-app

directory for the website to showcase the project

### Android setup 

remove the .dll x86 file that cause the 1st error

make sure all the runtime packages include Android : 

- \MRViz\MRViz\Library\PackageCache\com.unity.robotics.ros-tcp-connector@c27f00c6cf\Runtime\Unity.Robotics.ROSTCPConnector.asmdef

- C:\Users\etien\Desktop\MRViz\MRViz\Library\PackageCache\com.unity.robotics.urdf-importer@90f353e435\Runtime\Unity.Robotics.URDFImporter.asmdef

- C:\Users\etien\Desktop\MRViz\MRViz\Library\PackageCache\com.unity.robotics.visualizations@c27f00c6cf\Runtime\Unity.Robotics.Visualizations.asmdef

## main project setup

1. Register and download `Add Vuforia Engine to a Unity Project or upgrade to the latest version` from `https://developer.vuforia.com/downloads/sdk` (To deploy on Android, `Download for Android` may be needed. Please refer to Vuforia doc).

2. After import the downloaded package, the errors should be fixed. You also need to enter the API-KEY to enable the AR features. See `https://library.vuforia.com/getting-started/getting-started-vuforia-engine-unity`.

3. The car model can be found here: `https://visionlib.com/wp-content/uploads/resources/vlsportscar/VL-SportsCar-Print-A4.pdf`.


4. **New:** To test the World Anchor Method, please install tf2 packages in ROS.