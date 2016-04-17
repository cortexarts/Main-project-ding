#pragma strict

var rayLength : int = 20;

private var inventory : Inventory;

private var guiShow : boolean = false;

private var guiShowWater : boolean = false;

function Start()
{
	inventory = GameObject.Find("First Person Controller").GetComponent(Inventory);
}

function Update()
{
	var hit : RaycastHit;
	var fwd = transform.TransformDirection(Vector3.forward);
	
	if(Physics.Raycast(transform.position, fwd, hit, rayLength))
	{
		if(hit.collider.gameObject.tag == "Wood")
		{			
			guiShow = true;
			
			if(Input.GetKeyDown("e"))
			{
				inventory.wood++;
				Destroy(hit.collider.gameObject);
				guiShow = false;
			}
		}
			else
			{
				guiShow = false;
			}

		if(hit.collider.gameObject.tag == "Water")
		{			
			guiShowWater = true;
			
			if(Input.GetKeyDown("e"))
			{
				inventory.bottle++;
				guiShowWater = false;
			}
		}
			else
			{
				guiShowWater = false;
			}
	 }
	 		
		if(hit.collider.gameObject.tag == "Coconut")
		{
			guiShow = true;
			
			if(Input.GetKeyDown("e"))
			{
				inventory.wood++;
				Destroy(hit.collider.gameObject);
				guiShow = false;
			}
		}

		if(hit.collider.gameObject.tag == "BushFull")
		{
			guiShow = true;

			if(Input.GetKeyDown("e"))
			{
				inventory.cookedFish++;
				Destroy(hit.collider.gameObject);
				guiShow = false;
	
			}
		}

		if(hit.collider.gameObject.tag == "naaktekonijnenfetish")
		{
			guiShow = true;

			if(Input.GetKeyDown("e"))
			{
				inventory.fish++;
				guiShow = false;
	
			}
		}
		if(hit.collider.gameObject.tag == "jemoeder")
		{
			guiShow = true;

			if(Input.GetKeyDown("e"))
			{
				Application.LoadLevel("Koffiebar");
				guiShow = false;
			}
		}
}


function OnGUI()
{
	if(guiShow == true)
	{
		GUI.Box(Rect(Screen.width / 2 - 150, Screen.height / 2 - 150, 200, 20), "Press E to interact");
	}

	if(guiShowWater == true)
	{
		GUI.Box(Rect(Screen.width /2 - 150, Screen.height /2 -150, 200, 20), "Press E to collect water");
	}

}








































