def near_ten(num):
  within = num - (num+2)/10*10
  return within in range(-2,3)