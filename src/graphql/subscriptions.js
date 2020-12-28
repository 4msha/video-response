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
export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo {
    onCreateVideo {
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
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo {
    onUpdateVideo {
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
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo {
    onDeleteVideo {
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
export const onCreateAudio = /* GraphQL */ `
  subscription OnCreateAudio {
    onCreateAudio {
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
export const onUpdateAudio = /* GraphQL */ `
  subscription OnUpdateAudio {
    onUpdateAudio {
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
export const onDeleteAudio = /* GraphQL */ `
  subscription OnDeleteAudio {
    onDeleteAudio {
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
export const onCreateText = /* GraphQL */ `
  subscription OnCreateText {
    onCreateText {
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
export const onUpdateText = /* GraphQL */ `
  subscription OnUpdateText {
    onUpdateText {
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
export const onDeleteText = /* GraphQL */ `
  subscription OnDeleteText {
    onDeleteText {
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
