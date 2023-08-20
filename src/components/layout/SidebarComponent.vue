<script setup lang="ts">
import HomeIcon from '../icons/HomeIcon.vue';
import UserIcon from '../icons/UserIcon.vue';
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__content">
      <nav class="sidebar__nav">
        <ul class="nav__list">
          <li class="nav__item">
            <RouterLink
              :to="{ name: 'home' }"
              class="nav__link"
              active-class="nav__active"
            >
              <HomeIcon />
              Home
            </RouterLink>
          </li>
          <li class="nav__item">
            <RouterLink
              :to="{ name: 'home' }"
              class="nav__link"
              active-class="nav__active"
            >
              <UserIcon />
              Profile
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  grid-area: sidebar;
  background-color: var(--black-300);
  border-right: 1px solid var(--border);
}

.sidebar__content {
  padding: 0.5rem;
}

.nav__list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav__link {
  display: flex;
  align-items: center;
  color: var(--color);
  padding: 0.5rem;
  border-radius: var(--border-radius);
  gap: 0.3rem;
}

.nav__link:hover {
  cursor: pointer;
  color: var(--white);
  background-color: var(--black-100);
}

.nav__active {
  cursor: pointer;
  color: var(--white);
  background-color: var(--black-100);
}
</style>
