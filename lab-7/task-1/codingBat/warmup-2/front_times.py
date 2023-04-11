def front_times(str, n):
  front_len= 3
  if len(str) < front_len:
    front_len = len(str)
  front = str[:3]
  
  res = ""
  for i in range(n):
    res += front
  return res
