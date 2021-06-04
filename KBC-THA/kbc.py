from questions import QUESTIONS


def isAnswerCorrect(question, answer):
        	
	if question["answer"]==answer:
	   	print("Correct answer is:",question["answer"])
	   	return True
	else:
	   	print("Correct answer is:",question["answer"])
	   	return False     	   	    	        	    	
def isValid(ans):
           if ans=='1' or ans=='2' or ans=='3' or ans=='4':
           	return True
           return False
           

def lifeLine(ques):

  
    ans=ques["answer"]
    if ans==1:
    	ques['option2']=None		
    	ques['option4']=None
    elif ans==2:
    	ques['option1']=None
    	ques['option4']=None
    elif ans==3:
    	ques['option1']=None
    	ques['option2']=None
    else:
    	ques['option2']=None
    	ques['option3']=None   		
    return ques
def kbc():
   
    print("*******WELCOME TO Kaun Banega Crorepati!!********\n")
    print("Rules to play KBC:\n",
        "* You will have 15 rounds\n",
        "* In each round, you will get a question\n",
        "* For each question, there are 4 choices out of which ONLY one is correct.\n",
        "*You may use 50-50 Lifeline only once.",
        "*You can Quit at any level of your choice. Enter QUIT to end game.")
    print("Enter LIFELINE to avail a lifeline.")
     
    lifeline=1
    level=0
    i=0
        
    while i<15:
    	print(f'\tQuestion {i+1}: {QUESTIONS[i]["name"]}' )
    	print(f'\t\tOptions:')
    	print(f'\t\t\tOption 1: {QUESTIONS[i]["option1"]}')
 	   
    	print(f'\t\t\tOption 2: {QUESTIONS[i]["option2"]}')
    	print(f'\t\t\tOption 3: {QUESTIONS[i]["option3"]}')
    	print(f'\t\t\tOption 4: {QUESTIONS[i]["option4"]}')
    	print("Available Lifeline:",lifeline)
    	ans = input('Your choice ( 1-4 ) : ')
    	
    	if ans.lower()=="lifeline" and lifeline==1 and i!=14:
    		QUESTIONS[i]=lifeLine(QUESTIONS[i])
    		lifeline-=1
    		continue
    	if ans.lower()=="quit":
    		print("The game has ended.\nThank You for Playing.")
    		print("Total Amount Won: Rs.",QUESTIONS[i-1]["money"] if i>0 else 0)
    		break
    		
    	
    	if not isValid(ans):
    		print("Invalid Input!")
    		continue
    	if isAnswerCorrect(QUESTIONS[i], int(ans)):
    		
    		print('\nCorrect !')
    		print("\nTotal Money won till now:Rs.",QUESTIONS[i]["money"])
    		i+=1
    		if i>4 and i<9:
    			  print("You are on Level 1.")
    			  level=1
    		elif i>=9 and i<14:
    			  print("You are on level 2")
    			  level=2
    		elif i==14:
    			  level=3
    			  print("\n\n****Congratulations!!You've won the game****")  	   	      	  	     	        	  	      	        	  	      	  	
    	else:      	         	 
      	  	print('\nIncorrect !')
      	  	print("\n You Lose! Better Luck next Time.")
      	  	if level==0:
      	  		i=0
      	  	elif level==1:
      	  		i=4
      	  	elif level==2:      	  		   
      	  		i=9
      	  	print("\nTotal amount won: Rs",QUESTIONS[i-1]["money"] if i>0 else 0)
      	  	break     	 	 
      	  
      	     		        	  	  	    		      		      	    
kbc()
