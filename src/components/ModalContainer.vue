<template>
  <div class="modal-overlay">
    <div class="modal">
      <div class="modal-header">
        <div class="header-left">
          <button class="back-btn">←</button>
          <div class="title-section">
            <h3>Return Items</h3>
            <h2>Select customer</h2>
          </div>
        </div>
        <button class="close-btn" @click="$emit('close')">×</button>
      </div>
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
  
  <style scoped lang="scss">
@import "../styles/variables.scss";
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
}

.modal {
  background: white;
  width: 80%;
  max-width: 800px;
  border-radius: 16px;
  overflow: hidden;
  max-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
}

.modal-header {
  padding: 20px;
  padding-bottom:10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 16px 16px 0 0;

  .header-left {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .title-section {
    h3 {
        
      font-size: 12px;
      font-weight: $font-semibold;
      margin: 0;
    }
    h2 {
      font-size: 18px;
      font-weight: $font-bold;
      margin: 0;
    }
  }
}

.modal-content {
  padding: 20px;
  overflow-y: auto;
  flex: 1;
}

.close-btn {
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 8px;
  border-radius: $radius-round;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: $primary-hover 0.2s ease-in-out;

  &:hover {
    background: $background-light;
  }
}
.back-btn {
  border: 1px solid $primary-hover;
  font-size: 18px;
  cursor: pointer;
  padding: 8px;
  border-radius: $radius-round;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: $primary-hover 0.2s ease-in-out;
}
</style>