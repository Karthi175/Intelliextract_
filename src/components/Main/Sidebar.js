import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <form method="POST" action="#" enctype="multipart/form-data">
        <div class="form-group" className={styles.applyshadow}>
          <div class="input-group input-file" name="Fichier1">
            <input
              type="text"
              class="form-control"
              placeholder="Choose a file..."
              style={{ maxWidth: "300px" }}
            />
            <span class="input-group-btn">
              <button class="btn btn-warning btn-reset" type="button">
                Choose
              </button>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Sidebar;
