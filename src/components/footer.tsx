"use client";
import * as React from "react";
import "./styles/footer"
export default function Footer() {
  return (
    <>
      <footer>
        <nav className="grid grid-flow-col gap-4" style={{ cursor: "pointer" }}>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav style={{ cursor: "pointer" }}>
          <div className="grid grid-flow-col gap-4">
            <a>
              <img src="/images/icons8-github.svg" alt="" />
            </a>
            <a>
              <img src="/images/icons8-linkedin.svg" alt="" />
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2023 - Decelerate</p>
        </aside>
      </footer>
    </>
  );
}
