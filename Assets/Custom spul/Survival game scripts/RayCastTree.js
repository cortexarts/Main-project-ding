#pragma strict

var rayLength = 10;

//private var inventory : Inventory;

//private var guiShow : boolean = false;

private var treeScript : TreeController;

private var playerAnim : PlayerControl;

//function Start()
//{
//	inventory = GameObject.Find("First Person Controller").GetComponent(Inventory);
//}

function Update()
{
	var hit : RaycastHit;
	var fwd = transform.TransformDirection(Vector3.forward);
	
	if(Physics.Raycast(transform.position, fwd, hit, rayLength))
	{
		if(hit.collider.gameObject.tag == "Tree")
		{
			treeScript = GameObject.Find(hit.collider.gameObject.name).GetComponent(TreeController);
			playerAnim = GameObject.Find("FPSArms_Axe@Idle").GetComponent(PlayerControl);


			if(Input.GetMouseButton(0) && playerAnim.canSwing == true)
			{
				treeScript.treeHealth -= 1;
			//	inventory.wood++;
			//	guiShow = true
			//
			//	if(guiShow = true)
			//	{
			//		yield WaitForSeconds(2);
			//		guiShow = false
			//	}
			}
		}
	}
}
