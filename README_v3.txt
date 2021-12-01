https://www.pluralsight.com/guides/how-to-reference-a-function-in-another-component

troubleshoot

1) find IP

34.211.151.140
ec2-34-211-151-140.us-west-2.compute.amazonaws.com


2) relaunch ganache

 ./node_modules/.bin/ganache-cli --port 8545  --chainId 5777 -h ec2-34-220-121-81.us-west-2.compute.amazonaws.com
 ./node_modules/.bin/ganache-cli --port 8545  --chainId 5777 -h ec2-18-237-47-29.us-west-2.compute.amazonaws.com


ec2-52-12-146-136.us-west-2.compute.amazonaws.com


2.5) check truffle-config.js to make sure you have the right IP!

2.7) check App.js to make sure you have the right IP!

3) truffle build / test

./node_modules/.bin/truffle migrate
./node_modules/.bin/truffle test
4) update AbI
  }
}ubuntu@ip-172-31-8-41:~/eth-todolist-react/build/contracts cat TodoList.json



"0x156e15F6b2448B452A8493c6634Cb82a62E46734"

"0x9025281a6ef718101BB9f7bc09138719A39fD1f5",


ubuntu@ip-172-31-8-41:~/eth-todolist-react/src$ vi config.js


5.) connect to metamask
 0x33e872b2bcc0e13e519035ad406f5d6500a642fdb5a3385ed56e0cb6a0e306e0


remember to import an account
connect the account
add the 'right' ip with 8545 port



6.) don't for get npm start!!!!