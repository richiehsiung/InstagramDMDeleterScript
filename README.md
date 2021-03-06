# InstagramDMUnsender
Open Up Conversation of Choice->Right Click->Inspect Element->Console->Paste Script->Press Enter

If you refresh the page, make sure you only open console after opening the chat. Always open the chat before Console.

OR:

Mac:

    Chrome:  Cmd+Option+J
  
    Firefox: Cmd+Option+k
  
Rest of the world:

    Chrome: Ctrl+Shift+J
  
    Firefox: Ctrl+Shift+K
  
If you want to unsend all messages in the chat, scroll to the beginning (there are scripts/add-ons to do this), open console, paste the script, and press enter.

Script V1 unsends ALL LOADED messages instantly at the time the script is run by default, unless you change the bounds. In reality, this is approximately 87+-10 Messages before a 429 error occurs (you will have to wait a bit before continuing). Use V1 if you want to delete small amounts (<80 to be safe) of messages quick.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
V2 unsends ALL LOADED messages, unless you change the bounds, with a 3.2 second gap between the unsending of each message (to avoid 429 error)
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Specific Range (Chrome) (Currently Quite Rudimentary) :

Load messages to where you want to roughly start unsending from (precision doesn't matter that much, just make sure the message is loaded)

In console, paste 

    var m = document.querySelectorAll('.PaBnr.eFVJg');  
    
and press enter.

Type m, and press enter (maybe twice). 

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

Scroll to the first message in the range of messages you want unsent

run your cursor (don't click) down the Nodelist until the message you want to start unsending from gets highlighted in the window (you will see a box come up with "div.PaBnr.eFVJg" inside pointing outside your current window of view if your cursor is currently on a message in the Nodelist outside of your scope of view), the number to the left of the colon is the index of the respective message in the Nodelist

Scroll to the last message in the range of messages you want unsent

run your cursor down the list until the last message you want to unsend gets highlighted, the number to the left of the colon is the index of the message in the Nodelist

alternatively, start at a random position on the Nodelist, and click it. This will bring you to the Elements page, with the div of the particular message you clicked on highlighted. Right click the highlighted div and click "scroll into view" to see the message in chat. If the highlighted message is your desired starting or ending message, the random Node you clicked is the Node you want to start with, or end with, and the number to the left of the colon is the index of the message in the Nodelist. Trial and Error until you find the desired starting and ending indices.

in:

    for (i=0; i<m.length; i++) {
    
change 0 to your start message index, and m.length to your end message index. 

That's it, press enter and every message in the range you have selected will be unsent.


