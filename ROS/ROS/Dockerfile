FROM ros:melodic-ros-base

SHELL ["/bin/bash", "-c"] 

# Copy packages
COPY ./ros_packages/ /catkin_ws/src/
	
RUN git clone https://github.com/Unity-Technologies/ROS-TCP-Endpoint /catkin_ws/src/ros_tcp_endpoint -b v0.7.0

COPY ./ros_docker/set-up-workplace.sh /setup.sh
#COPY docker/tutorial /

RUN chmod +x /setup.sh
RUN sed -i 's/\r$//' /setup.sh
RUN source /setup.sh && rm /setup.sh

WORKDIR /catkin_ws

# Source the workspace on sign in
RUN echo ". devel/setup.bash" >> ~/.bashrc

# making sure the file modes are executable
RUN chmod +x src/ros_tcp_endpoint/src/ros_tcp_endpoint/*.py

#ENTRYPOINT ["/tutorial"]
