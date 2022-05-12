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
    private Dictionary<string, int> m_Topics = new Dictionary<string, int>();

    private void Start()
    {
        m_Connection = ROSConnection.GetOrCreateInstance();
        m_Connection.ListenForTopics(onNewTopic, notifyAllExistingTopics: true);

        InsertIntoObjectCollection(m_Topics);
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

    public void InsertIntoObjectCollection(Dictionary<string, int> m_Topics)
    {
        StartCoroutine(InsertIntoObjectCollection_Coroutine(m_Topics));
    }

    public IEnumerator InsertIntoObjectCollection_Coroutine(Dictionary<string, int> m_Topics)
    {
        foreach (KeyValuePair<string, int> kvp in m_Topics)
        {
            var button = Instantiate(buttonPrefab, gridObjectCollection.transform);
            ButtonConfigHelper bch = button.GetComponent<ButtonConfigHelper>();
            bch.MainLabelText = kvp.Key;
        }

        yield return new WaitForEndOfFrame();
        gridObjectCollection.UpdateCollection();
        yield return new WaitForEndOfFrame();
        scrollingObjectCollection.UpdateContent();
    }

    // Start is called before the first frame update
    /*void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }*/
}
