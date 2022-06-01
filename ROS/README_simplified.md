## Setup
Store the unzipped rosbags in the ```data``` directory and run Docker.

## ROS 1
Steps:

1. Setup ROS container
    ```sh
    docker build -t melodic -f ROS/Dockerfile ROS/
    docker run -it --rm -v ${pwd}/data:/home/data -p 10000:10000 melodic /bin/bash
    ```

    **Note:** If you encounter errors because of the tail `/r`, try to add this command after line 13 of the dockerfile.

    ```Dockerfile
    RUN sed -i 's/\r$//' /setup.sh
    ```

2. Setup ros_tcp_endpoint
    ```sh
    source devel/setup.bash
    roslaunch ros_tcp_endpoint endpoint.launch &
    ```

3. Setup rosbag loop play
    ```sh
    rosbag play /home/data/yourbag.bag --loop
    ```

## ROS 2
Steps:

1. Setup ROS 2 container
    ```sh
    docker build -t foxy -f ROS2/Dockerfile ROS2/
    docker run -it --rm -v ${pwd}/data:/home/data -p 10000:10000 foxy /bin/bash
    ```

2. Setup ros_tcp_endpoint
    ```
    ros2 run ros_tcp_endpoint default_server_endpoint --ros-args -p ROS_IP:=0.0.0.0 > ros_tcp_endpoint.log &
    ```

3. Setup rosbag loop play
    ```
    ros2 bag play /home/data/yourbag --loop > rosbag.log &
    ```

4. Sanity check

    This command should display the point cloud values.

    ```
    ros2 topic echo /points_raw
    ```
