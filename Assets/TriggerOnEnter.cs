using UnityEngine;
using System.Collections;

public class TriggerOnEnter : MonoBehaviour {

		public GameObject BBC;


		void OnTriggerEnter(Collider other) 
		{
				Application.LoadLevel("2dCharacter");
		}
}