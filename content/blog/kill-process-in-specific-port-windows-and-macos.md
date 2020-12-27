---
title: Kill process in specific port (Windows and MacOS)
language: en-US
date: 2020-12-27T12:58:11.314Z
subtitle: Here is a quick way to kill a process that is running in a specific port.
tags: kill, process, specific, port, windows, mac
---
For developers it's pretty common to have a process that hangs in a specific port due to uncaught exceptions or some other yet unknown reason.

Here's a quick way to kill any process that's running in a specific port:

### Windows

1. Open a **command prompt**. (Windows Key + R > cmd)
2. Type **netstat -ano | findstr :PORT**
3. Replace **PORT** with the port you're looking for (i.e.: **netstat -ano | findstr :3000**)
4. The **\-o** argument is responsible for returning the process id.
5. Now grab the process id and run **taskkill /PID <*Enter process id here>* /F**

### Mac OS

1. Open **terminal**
2. Type **sudo lsof -i -P -n | grep LISTEN**
3. Second argument will be the process id.
4. Copy it and run **kill <*Enter process id here*>**

### Automating (for MacOS)

Do you need to run this often?\
What about creating a function so you can call simply: **killport 3000**?

How to do that:

1. Open **terminal**\
2. Run **touch ~/.bash_profile** (If you don't have a bash profile created yet)\
3. Run **vim ~/.bash_profile**
4. Add to the file:

```shell
killport() {
    lsof -t -i tcp:"$1" | xargs kill
}
```

5. Restart your terminal.
6. Now try **killport 3000**.