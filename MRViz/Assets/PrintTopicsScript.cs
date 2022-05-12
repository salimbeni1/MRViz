using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Unity.Robotics.ROSTCPConnector;

public class PrintTopicsScript : MonoBehaviour
{
    ROSConnection m_Connection;
    Dictionary<string, int> m_Topics = new Dictionary<string, int>();

    // Start is called before the first frame update
    void Start()
    {
        m_Connection = ROSConnection.GetOrCreateInstance();
        m_Connection.ListenForTopics(onNewTopic, notifyAllExistingTopics: true);
    }

    private void onNewTopic(RosTopicState state)
    {
        int vis;
        if (!m_Topics.TryGetValue(state.Topic, out vis))
        {
            vis = 0;
            m_Topics.Add(state.Topic, vis);
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void printTopics()
    {
        foreach(KeyValuePair<string, int> kvp in m_Topics)
        {
            Debug.Log(kvp.Key);
        }
    }
}
