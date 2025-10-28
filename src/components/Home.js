import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="homepage">
                <section className="hero">
                    <h1>Welcome to Array Visualizer</h1>
                    <p>
                        Learn, practice, and visualize how arrays work with interactive
                        animations. This project is built to make Data Structures easy and
                        fun for beginners. You can also add <b>multiple value types</b> like numbers, strings, and booleans in the same array.
                    </p>
                </section>

                <section className="about">
                    <h2>What is an Array?</h2>
                    <p>
                        An <b>Array</b> is a data structure that stores multiple elements
                        of the same type in a contiguous block of memory. Each element in
                        an array can be accessed using its <b>index</b>, starting from 0.
                        Arrays are widely used in computer science for storing data,
                        performing operations, and solving problems efficiently.
                    </p>
                    <br/>
                    <p>
                        For example, an array <code>[5, 6, 4, 8]</code> contains 4
                        elements. The element at index 0 is 5, at index 1 is 6, at index 2
                        is 4, and at index 3 is 8.
                    </p>
                    <p>
                        You can also add <b>multiple value types</b> in the same array. For example:
                        <code>[42, "hello", true, "array"]</code> contains numbers, strings, and a boolean.
                    </p>
                </section>


                <section className="features">
                    <h2>What will you learn here?</h2>
                    <p>
                        This website provides a hands-on way to understand arrays through
                        visualization. You can perform the following operations:
                    </p>
                    <ul>
                        <li>
                            <b>Create Array:</b> Define your own array or generate a random
                            one and see it visualized instantly.
                        </li>
                        <li>
                            <b>Insert Element:</b> Add a new element at any position in
                            the array with smooth animations.
                        </li>
                        <li>
                            <b>Remove Element:</b> Delete an element from any position in
                            the array with smooth animations.
                        </li>
                        <li>
                            <b>Update Element:</b> Modify the value at a given index and see
                            the change reflected live.
                        </li>
                        <li>
                            <b>Select Operations:</b> Highlight and understand important
                            operations like finding the <b>maximum</b>, <b>minimum</b>, and
                            <b>sorting</b> the array.
                        </li>
                    </ul>
                </section>

                <section className="why">
                    <h2>Why Array Visualizer?</h2>
                    <p>
                        Arrays are the foundation of Data Structures and Algorithms. Many
                        advanced topics like Searching, Sorting, Linked Lists, Stacks, and
                        Queues are built upon arrays. By using this tool, you will:
                    </p>
                    <ul>
                        <li>Develop a strong understanding of array basics.</li>
                        <li>Learn how different operations affect the array structure.</li>
                        <li>Visualize algorithms step by step instead of only reading
                            theory.</li>
                        <li>Build confidence in solving coding problems with arrays.</li>
                    </ul>
                </section>

                <section className="get-started">
                    <h2>Get Started</h2>
                    <p>
                        Use the navigation bar above to try out each operation. Start with <b>Create</b> to build your array, then explore <b>Insert</b>, <b>Remove</b>, <b>Update</b>, and <b>Select</b>.
                        Each feature is interactive and shows you real-time results with animations.
                    </p>
                    <button onClick={() => navigate("/create")}>Start Learning</button>
                </section>
            </div>
        </div>
    )
}
