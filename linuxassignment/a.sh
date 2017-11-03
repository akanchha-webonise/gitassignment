echo  "Enter your choice"
while :
do
	echo  "1.Display User"
	echo  "2.Permission"
	echo  "3.Groups"
	echo  "4.Processes"
	echo  "5.Exit"
	
	read choice
	case $choice in
	1) who ;; 
	2)ls -l ;;
	3)groups ;;
	4)ps ;;
	5)exit ;;
	esac
done




