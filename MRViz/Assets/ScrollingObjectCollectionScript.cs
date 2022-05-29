using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Microsoft.MixedReality.Toolkit.UI;
using Microsoft.MixedReality.Toolkit.Utilities;
using Unity.Robotics.ROSTCPConnector;

public class ScrollingObjectCollectionScript : MonoBehaviour
{
    public GridObjectCollection gridObjectCollection;
    public ScrollingObjectCollection scrollingObjectCollection;
    public GameObject buttonPrefab;

    private ROSConnection m_Connection;
    private List<RosTopicState> m_Topics = new List<RosTopicState>();

    private void Start()
    {
        m_Connection = ROSConnection.GetOrCreateInstance();
        m_Connection.ListenForTopics(onNewTopic, notifyAllExistingTopics: true);

        StartCoroutine(InsertIntoObjectCollection_Coroutine()); // add buttons for available topics
    }

    private void onNewTopic(RosTopicState state)
    {
        if (!m_Topics.Contains(state))
        {
            m_Topics.Add(state);
        }
    }

    public IEnumerator InsertIntoObjectCollection_Coroutine()
    {
        foreach(var topic in m_Topics)
        {
            var button = Instantiate(buttonPrefab, gridObjectCollection.transform);
            button.SetActive(true);

            ButtonConfigHelper bch = button.GetComponent<ButtonConfigHelper>();
            bch.MainLabelText = topic.Topic;

            TopicButtonScript tbs = button.GetComponent<TopicButtonScript>();
            tbs.topic = topic;
        }

        yield return new WaitForEndOfFrame();
        gridObjectCollection.UpdateCollection();
        yield return new WaitForEndOfFrame();
        scrollingObjectCollection.UpdateContent();
    }
}
