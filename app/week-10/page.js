"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
import { useEffect, useState } from "react";
import { dbGetAllPosts } from "./_services/blog-service";

export default function SignInPage() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    const [blogPostList, setBlogPostList] = useState([]);
    useEffect( () => {
        if(user){
            dbGetAllPosts(user.uid, setBlogPostList);
        }
    }, [user] );

    // console.dir(blogPostList);

    return (
        <main className="m-5">
            <header>
                <h1 className="text-3xl text-center">Firebase Auth</h1>
            </header>
            {user ? (
                <div>
                    <p>Welcome {user.displayName}!</p>
                    <p>{user.email}</p>
                    <img src={user.photoURL} className="w-10 h-10" />
                    <div>
                        <Link href="/week-10/add-blog-post/">Add a new Blog Post</Link>
                    </div>
                    <section>
                        <h2>My Blog Posts</h2>
                        <ul>
                            {
                                blogPostList.map( (post) => {
                                    let postUrl = `/week-10/${post.id}`;
                                    return( <li key={post.id}>
                                        <Link href={postUrl}>{post.title}</Link>
                                    </li>)
                                } )
                            }
                        </ul>
                    </section>
                    <button
                        type="button"
                        onClick={handleSignOut}
                        className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
                    >Sign Out</button>
                </div>
            ) : (
                <div>
                    <button
                        type="button"
                        onClick={handleSignIn}
                        className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4"
                    >Sign In</button>
                </div>
            )}
        </main>
    );

}