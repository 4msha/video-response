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
          url
          userID
          videos
          content
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
          url
          userID
          videos
          content
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
          url
          userID
          videos
          content
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
      url
      userID
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
          url
          videoID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      videos
      content
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
      url
      userID
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
          url
          videoID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      videos
      content
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
      url
      userID
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
          url
          videoID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      videos
      content
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
      url
      videoID
      video {
        id
        url
        userID
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
        videos
        content
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
      url
      videoID
      video {
        id
        url
        userID
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
        videos
        content
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
      url
      videoID
      video {
        id
        url
        userID
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
        videos
        content
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
