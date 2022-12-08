import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login( $email:!String, $password:String! ){
    login( email:$email, password:$password ){
        token
        user{
            _id
            username
        }
    }
}`;

export const ADD_USER = gql`
mutations addUser(username:$username, email:$email, password:$password ){
    addUser(username: $username, email:$email, password:$password){
        token
        user{
            _id
            username
            email
            bookCount
            savedBooks {
                bookid
                authors
                description
                title
                image
                link
            }
        }
    }
}`;

export const SAVE_BOOK = gql`
mutation saveBook($newBook:InputBook!){
    saveBook(newBook:$newBook){
        _id
        username
        email
        savedBooks{
            bookid
            authors
            description
            title
            image
            link
        }
    }
}
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID){
    removeBook(bookId:$bookid){
        _id
        username
        email
        savedBooks{
            bookid
            authors
            description
            title
            image
            link
        }
    }
}
`;