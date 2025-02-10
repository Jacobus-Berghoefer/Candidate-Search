// logic to handle GitHub API
// import { useState, useEffect } from 'react'; (delete?)

const GITHUB_API_URL = 'https://api.github.com/users';

export const fetchCandidate = async () => {
  try {
    const response = await fetch(GITHUB_API_URL);
    if (!response.ok) throw new Error('Failed to fetch candidates');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};