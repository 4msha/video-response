/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
      id
      token
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
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        token
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
      nextToken
    }
  }
`;
export const getAudio = /* GraphQL */ `
  query GetAudio($id: ID!) {
    getAudio(id: $id) {
      id
      token
      videoID
      name
      video {
        id
        token
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
export const listAudios = /* GraphQL */ `
  query ListAudios(
    $filter: ModelAudioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAudios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        token
        videoID
        name
        video {
          id
          token
          type
          userID
          maxCount
          currentCount
          content
          name
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getText = /* GraphQL */ `
  query GetText($id: ID!) {
    getText(id: $id) {
      id
      name
      content
      videoID
      video {
        id
        token
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
export const listTexts = /* GraphQL */ `
  query ListTexts(
    $filter: ModelTextFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTexts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        content
        videoID
        video {
          id
          token
          type
          userID
          maxCount
          currentCount
          content
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const videoByUserId = /* GraphQL */ `
  query VideoByUserId(
    $userID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    videoByUserId(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        token
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
      nextToken
    }
  }
`;
