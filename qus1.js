Print("enter a number");
n = as.integer(readLines("stdin",1));
sum = 0
i=1
    while(i<=n)
   {
	sum = sum +i
	i = i +1
   }
   paste("The sum is",sum)