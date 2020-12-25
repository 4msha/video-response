/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo {
    onCreateVideo {
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
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo {
    onUpdateVideo {
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
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo {
    onDeleteVideo {
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
export const onCreateAudio = /* GraphQL */ `
  subscription OnCreateAudio {
    onCreateAudio {
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
export const onUpdateAudio = /* GraphQL */ `
  subscription OnUpdateAudio {
    onUpdateAudio {
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
export const onDeleteAudio = /* GraphQL */ `
  subscription OnDeleteAudio {
    onDeleteAudio {
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
