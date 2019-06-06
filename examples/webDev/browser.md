## Step 1: Type web address into browser
## step 2: web address translates to IP from DNS (Domain Name System)
- Check browser cache
- Check OS cache
- Check Router cache
- Check ISP cache
## step 3:
    IF not found, query sent to DNS to find
## Step 4: Browser initiates TCP connection to server
    In order to transfer data packets between your computer(client) and the server, it is
     important to have a TCP connection established. This connection is established using 
     a process called the TCP/IP three-way handshake. This is a three step process where the
      client and the server exchange SYN(synchronize) and ACK(acknowledge) messages to establish a connection.

    1. Client machine sends a SYN packet to the server over the internet asking if it is open for new connections.
    2. If the server has open ports that can accept and initiate new connections, it’ll respond with an 
    ACKnowledgment of the SYN packet using a SYN/ACK packet.
    3. The client will receive the SYN/ACK packet from the server and will acknowledge it by sending an ACK packet.

    Then a TCP connection is established for data transmission!
## Step 5:Request sent to server.
    - Get request sent
## Step 6: Server handles the request and returns a response
## Step 7: Server sends request with page/status code/ ect
## step 8: Browser builds response based on HTML blueprint and then reads CSS/Javascript stylesheets.


```
Short:
1 type desired url
2 convert to IP
3 check caches/ lookup DNS query if necessary
4 Handshake established
5 Send request (Get)
6: Server transaltes request and builds response
7: Server sends response with page and status code
8: Browser buils page based on html blueprint. Then reads in accosiated CSS/Javascript
```
