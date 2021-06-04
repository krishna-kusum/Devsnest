#done and dusted
import string
from words import choose_word
from images import IMAGES

def is_word_guessed(secret_word, letters_guessed):    
    guessed_word=get_guessed_word(secret_word,letters_guessed)
    if secret_word==guessed_word:
    	return True
    return False


def get_guessed_word(secret_word, letters_guessed):
    index = 0
    guessed_word = ""
    while (index < len(secret_word)):
        if secret_word[index] in letters_guessed:
            guessed_word += secret_word[index]
        else:
            guessed_word += "_"
        index += 1
    return guessed_word


def get_available_letters(letters_guessed):
    total_letters='abcdefghijklmnopqrstuvwxyz'
    string=''
    for i in total_letters:
    	if i in letters_guessed:
    		string=string+'_'
    	else:
    		string=string+i
    letters_left = string
    return letters_left

def isValid(letter):
	
	if len(letter)==1 and ord(letter)>=97 and ord(letter)<=122:
		return True
		
	return False
	
def hint(secret_word,letters_guessed):
	guessed_word=get_guessed_word(secret_word,letters_guessed)
	for i in range(len(secret_word)):
		if secret_word[i]!=guessed_word[i]:
			print(secret_word[i])
			break
	
def hangman(secret_word):
  
    print("*****Welcome to the game, Hangman!*****")
    print("I am thinking of a word that is {} letters long.".format( str(len(secret_word))), end='\n\n')
    
    print()
    print("Enter HINT for hint.")    

    letters_guessed = []
    hint_val=1
    count=0
    while count<8:

   	 available_letters = get_available_letters(letters_guessed)
   	 print("Available letters: {} ".format(available_letters))
   	 guess=input("Please enter a letter:")
   	 letter=guess.lower()
   	 
   	 if hint_val>0:
 	   	if letter=="hint":
 	   		hint(secret_word,letters_guessed)
 	   		hint_val-=1
 	   		continue
   	 
   	 if letter not in available_letters or not isValid(letter):
 	   	print("Invalid Entry.")
 	   	continue
   	 
   	 if letter in secret_word :
   	 	print("Right Choice!!")
   	 	letters_guessed.append(letter)
   	 	print("Good guess: {} ".format( get_guessed_word(secret_word, letters_guessed)))
   	 	print("Remaining Lives:","* "*(8-count))
   	 	if is_word_guessed(secret_word, letters_guessed) == True:
     		   
        	    print(" * * * * Congratulations, you won! * * * * ", end='\n\n')
        	    break
   	 else: 
 	       print("Wrong Choice!")
 	       print("Oops! That letter is not in my word: {} ".format( get_guessed_word(secret_word, letters_guessed)))
 	       letters_guessed.append(letter)
 	       print(IMAGES[count])
 	       count+=1
 	       print("Remaining Lives:","* "*(8-count))
 	       if count==8:
    	    	print("Oh-Ooh....You Lose!\n Better Luck Next Time.")
    	    	print("The secret word is :",secret_word)
 	      	 
 	       
    	    
	

# Load the list of words into the variable wordlist
# So that it can be accessed from anywhere in the program
secret_word = choose_word()
hangman(secret_word)
