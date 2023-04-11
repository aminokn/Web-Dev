def cat_dog(str):
  count1= 0
  count2 = 0
  for i in range(len(str)-1):
    a = str[i:i+3]
    if a == "cat":
      count1 += 1
    if a == "dog":
      count2 += 1
  
  if count1 == count2:
    return True
  else:
    return False
  