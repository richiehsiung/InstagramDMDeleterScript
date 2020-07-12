# InstagramDMDeleterScript
Open Up Conversation of Choice->Right Click->Inspect Element->Console->Paste Script->Press Enter

OR:

Mac:

    Chrome:  Cmd+Option+J
  
    Firefox: Cmd+Option+k
  
Rest of the world:

    Chrome: Ctrl+Shift+J
  
    Firefox: Ctrl+Shift+K
  
Deletes ALL LOADED Messages in chat, will add instructions for specific range 

Specific Range:

Load messages to where you want deleting to roughly start deleting (precision doesn't matter that much, just make sure the message is loaded)

In console, paste "var m = document.querySelectorAll('.PaBnr.eFVJg'); " and press enter.

Type m, and press enter twice. 

You will see something like this:

    NodeList(25) [div.PaBnr.eFVJg, div.PaBnr.eFVJg, div.PaBnr.eFVJg, div.PaBnr.eFVJg, div.PaBnr.eFVJg, div.PaBnr.eFVJg, div.PaBnr.eFVJg, div.PaBnr.eFVJg, div.PaBnr.eFVJg,  div.PaBnr.eFVJg, div.PaBnr.eFVJg, div.PaBnr.eFVJg, div.PaBnr.eFVJg, div.PaBnr.eFVJg, div.PaBnr.eFVJg, div.PaBnr.eFVJg, div.PaBnr.eFVJg, div.PaBnr.eFVJg, div.PaBnr.eFVJg, div.PaBnr.eFVJg, div.PaBnr.eFVJg, div.PaBnr.eFVJg, div.PaBnr.eFVJg, div.PaBnr.eFVJg, div.PaBnr.eFVJg]

