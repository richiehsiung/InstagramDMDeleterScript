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

Click on the Nodelist and you will see a drop down menu:

    length: 25
    0: div.PaBnr.eFVJg
    1: div.PaBnr.eFVJg
    2: div.PaBnr.eFVJg
    3: div.PaBnr.eFVJg
    4: div.PaBnr.eFVJg
    5: div.PaBnr.eFVJg
    6: div.PaBnr.eFVJg
    7: div.PaBnr.eFVJg
    8: div.PaBnr.eFVJg
    
and so on...

run your cursor down the list until the message you want to start deleting from gets highlighted, the number to the left of the colon is the index of the message in the Nodelist

run your cursor down the list until the last message you want to delete gets highlighted, the number to the left of the colon is the index of the message in the Nodelist

in:

    for (i=0; i<m.length; i++) {
    
change i=0 to i=your start message index, and m.length to your end message index. 

That's it, press enter and every message in the range you have selected will be deleted.


