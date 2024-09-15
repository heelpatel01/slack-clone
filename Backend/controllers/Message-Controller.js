const express = require("express");
const Message = require("../models/Message");

// /channels/:channelId/messages
// const handleNewMessageCreation = async (req, res) => {
//   //take a userId,ChannelID and store in the userschema whith message and these two things

//   try {
//     const { message } = req.body;
// const userId = req.cookies.userId;
// const channelId = req.params.channelId;

// try {
//   const newMessage = await Message.create({ message, userId, channelId });
//   return res.status(201).json({
//     message: "Message created successfully",
//     content: newMessage,
//   });
// } catch (error) {
//   console.error("Error creating the message:", error);
//   return res.status(500).json({
//     message: "Error creating the message",
//     error: error.message, // Send only the error message for security reasons
//   });
// }


//     return res.status(202).json({
//       message: "Message Stored Successfully!",
//       actualMessage: messageStored.message,
//     });
//   } catch (error) {
//     console.log("Error During Message Creation: " + error);
//     return res.status(501).json({
//       message: "Error During Message Creation",
//       error: error,
//     });
//   }
// };




const handleNewMessageCreation = async (req, res) => {
  try {
    const { message } = req.body;
    const userId = req.cookies.userId;
    const channelId = req.params.channelId;

    if (!userId || !channelId) {
      return res.status(400).json({
        message: "User ID and Channel ID are required.",
      });
    }

    // Create a new message
    const newMessage = await Message.create({ message, sender: userId, Channel: channelId });

    return res.status(201).json({
      message: "Message created successfully",
      content: newMessage,
      success:true
    });
  } catch (error) {
    console.error("Error creating the message:", error);
    return res.status(500).json({
      message: "Error creating the message",
      success:false,
      error: error.message, // Send only the error message for security reasons
    });
  }
};

// channels/:channelId/messages
// async function handleMessageFetching(req, res) {
//   try {
//     if (!req.cookies.userId) {
//       return res.status(404).json({
//         message: "User needs to login! ",
//       });
//     }

//     const channelId = req.params.channelId;

//     if (!channelId) {
//       return res.status(501).json({
//         message: "No channel selected",
//       });
//     }

//     const jsk = { Channel: channelId };

//     const allMessages = await Message.find(jsk);
//     allMessages.save();

//     if (!allMessages) {
//       return res.status(501).json({
//         messages: "Message not found",
//       });
//     }

//     return res.status(200).json({
//       message: "all messages fetched successfully",
//       content: allMessages,
//     });
//   } catch (error) {
//     console.log("Error during fetching the messages");
//     return res.json({
//       message: "Error during fetching the messages",
//       error: error,
//     });
//   }
// }


const handleMessageFetching = async (req, res) => {
  try {
    if (!req.cookies.userId) {
      return res.status(401).json({
        message: "User needs to login!",
      });
    }

    const channelId = req.params.channelId;

    if (!channelId) {
      return res.status(400).json({
        message: "No channel selected",
      });
    }

    const messages = await Message.find({ Channel: channelId }).populate("sender");

    if (messages.length === 0) {
      return res.status(404).json({
        message: "No messages found",
        success:true
      });
    }

    return res.status(200).json({
      message: "All messages fetched successfully",
      content: messages,
      success:true
    });
  } catch (error) {
    console.error("Error during fetching the messages:", error);
    return res.status(500).json({
      message: "Error during fetching the messages",
      error: error.message, // Send only the error message for security reasons
      success:false
    });
  }
};

module.exports = { handleMessageFetching, handleNewMessageCreation };
