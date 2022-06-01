using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Unity.Robotics.ROSTCPConnector;
using Unity.Robotics.Visualizations;

public class TopicButtonScript : MonoBehaviour
{
    public RosTopicState topic;
    private IVisual m_Visual = null;
    private IVisualFactory m_VisualFactory = null;
    private bool visualize = false;

    private IVisualFactory GetVisualFactory()
    {
        if (m_VisualFactory == null)
        {
            m_VisualFactory = VisualFactoryRegistry.GetVisualFactory(topic.Topic, topic.RosMessageName, topic.Subtopic);
        }

        return m_VisualFactory;
    }

    public void visualizeTopic()
    {
        visualize = !visualize;

        if (m_Visual == null)
        {
            m_Visual = GetVisualFactory().GetOrCreateVisual(topic.Topic);
        }

        if (m_Visual != null)
        {
            m_Visual.SetDrawingEnabled(visualize);
        }
    }
}
