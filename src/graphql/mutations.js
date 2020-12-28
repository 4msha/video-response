/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      number
      maxCount
      currentCount
      videos {
        items {
          id
          token
          parentToken
          type
          userID
          maxCount
          currentCount
          content
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      number
      maxCount
      currentCount
      videos {
        items {
          id
          token
          parentToken
          type
          userID
          maxCount
          currentCount
          content
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      number
      maxCount
      currentCount
      videos {
        items {
          id
          token
          parentToken
          type
          userID
          maxCount
          currentCount
          content
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createVideo = /* GraphQL */ `
  mutation CreateVideo(
    $input: CreateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    createVideo(input: $input, condition: $condition) {
      id
      token
      parentToken
      type
      userID
      maxCount
      currentCount
      user {
        id
        username
        email
        number
        maxCount
        currentCount
        videos {
          nextToken
        }
        createdAt
        updatedAt
      }
      audios {
        items {
          id
          token
          videoID
          name
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      texts {
        items {
          id
          name
          content
          videoID
          createdAt
          updatedAt
        }
        nextToken
      }
      content
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateVideo = /* GraphQL */ `
  mutation UpdateVideo(
    $input: UpdateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    updateVideo(input: $input, condition: $condition) {
      id
      token
      parentToken
      type
      userID
      maxCount
      currentCount
      user {
        id
        username
        email
        number
        maxCount
        currentCount
        videos {
          nextToken
        }
        createdAt
        updatedAt
      }
      audios {
        items {
          id
          token
          videoID
          name
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      texts {
        items {
          id
          name
          content
          videoID
          createdAt
          updatedAt
        }
        nextToken
      }
      content
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteVideo = /* GraphQL */ `
  mutation DeleteVideo(
    $input: DeleteVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    deleteVideo(input: $input, condition: $condition) {
      id
      token
      parentToken
      type
      userID
      maxCount
      currentCount
      user {
        id
        username
        email
        number
        maxCount
        currentCount
        videos {
          nextToken
        }
        createdAt
        updatedAt
      }
      audios {
        items {
          id
          token
          videoID
          name
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      texts {
        items {
          id
          name
          content
          videoID
          createdAt
          updatedAt
        }
        nextToken
      }
      content
      name
      createdAt
      updatedAt
    }
  }
`;
export const createAudio = /* GraphQL */ `
  mutation CreateAudio(
    $input: CreateAudioInput!
    $condition: ModelAudioConditionInput
  ) {
    createAudio(input: $input, condition: $condition) {
      id
      token
      videoID
      name
      video {
        id
        token
        parentToken
        type
        userID
        maxCount
        currentCount
        user {
          id
          username
          email
          number
          maxCount
          currentCount
          createdAt
          updatedAt
        }
        audios {
          nextToken
        }
        texts {
          nextToken
        }
        content
        name
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateAudio = /* GraphQL */ `
  mutation UpdateAudio(
    $input: UpdateAudioInput!
    $condition: ModelAudioConditionInput
  ) {
    updateAudio(input: $input, condition: $condition) {
      id
      token
      videoID
      name
      video {
        id
        token
        parentToken
        type
        userID
        maxCount
        currentCount
        user {
          id
          username
          email
          number
          maxCount
          currentCount
          createdAt
          updatedAt
        }
        audios {
          nextToken
        }
        texts {
          nextToken
        }
        content
        name
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteAudio = /* GraphQL */ `
  mutation DeleteAudio(
    $input: DeleteAudioInput!
    $condition: ModelAudioConditionInput
  ) {
    deleteAudio(input: $input, condition: $condition) {
      id
      token
      videoID
      name
      video {
        id
        token
        parentToken
        type
        userID
        maxCount
        currentCount
        user {
          id
          username
          email
          number
          maxCount
          currentCount
          createdAt
          updatedAt
        }
        audios {
          nextToken
        }
        texts {
          nextToken
        }
        content
        name
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const createText = /* GraphQL */ `
  mutation CreateText(
    $input: CreateTextInput!
    $condition: ModelTextConditionInput
  ) {
    createText(input: $input, condition: $condition) {
      id
      name
      content
      videoID
      video {
        id
        token
        parentToken
        type
        userID
        maxCount
        currentCount
        user {
          id
          username
          email
          number
          maxCount
          currentCount
          createdAt
          updatedAt
        }
        audios {
          nextToken
        }
        texts {
          nextToken
        }
        content
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateText = /* GraphQL */ `
  mutation UpdateText(
    $input: UpdateTextInput!
    $condition: ModelTextConditionInput
  ) {
    updateText(input: $input, condition: $condition) {
      id
      name
      content
      videoID
      video {
        id
        token
        parentToken
        type
        userID
        maxCount
        currentCount
        user {
          id
          username
          email
          number
          maxCount
          currentCount
          createdAt
          updatedAt
        }
        audios {
          nextToken
        }
        texts {
          nextToken
        }
        content
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteText = /* GraphQL */ `
  mutation DeleteText(
    $input: DeleteTextInput!
    $condition: ModelTextConditionInput
  ) {
    deleteText(input: $input, condition: $condition) {
      id
      name
      content
      videoID
      video {
        id
        token
        parentToken
        type
        userID
        maxCount
        currentCount
        user {
          id
          username
          email
          number
          maxCount
          currentCount
          createdAt
          updatedAt
        }
        audios {
          nextToken
        }
        texts {
          nextToken
        }
        content
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
