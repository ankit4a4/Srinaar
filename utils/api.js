// const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://shreegar-backend.onrender.com/api';

const VISITOR_TOKEN_KEY = 'visitor_token';
class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}
// Get visitor token from localStorage (client-side only)
function getVisitorToken() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(VISITOR_TOKEN_KEY);
}

// Save visitor token to localStorage (client-side only)
function saveVisitorToken(token) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(VISITOR_TOKEN_KEY, token);
}

// Handle response headers for visitor token
function handleResponseHeaders(res) {
  const visitorToken = res.headers.get('x-visitor-token');
  if (visitorToken) {
    saveVisitorToken(visitorToken);
  }
}

export const api = {
  async get(endpoint, options = {}) {
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };
    const visitorToken = getVisitorToken();
    if (visitorToken) {
      headers['x-visitor-token'] = visitorToken;
    }

    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'GET',
      credentials: 'include',
      headers,
      ...options,
    });

    handleResponseHeaders(res);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new ApiError(data.message || 'Request failed', res.status);
    }

    return res.json();
  },

  async post(endpoint, body, options = {}) {
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };
    const visitorToken = getVisitorToken();
    if (visitorToken) {
      headers['x-visitor-token'] = visitorToken;
    }

    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      credentials: 'include',
      headers,
      body: JSON.stringify(body),
      ...options,
    });

    handleResponseHeaders(res);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new ApiError(data.message || 'Request failed', res.status);
    }

    return res.json();
  },

  async put(endpoint, body, options = {}) {
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };
    const visitorToken = getVisitorToken();
    if (visitorToken) {
      headers['x-visitor-token'] = visitorToken;
    }

    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      credentials: 'include',
      headers,
      body: JSON.stringify(body),
      ...options,
    });

    handleResponseHeaders(res);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new ApiError(data.message || 'Request failed', res.status);
    }

    return res.json();
  },

  async delete(endpoint, options = {}) {
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };
    const visitorToken = getVisitorToken();
    if (visitorToken) {
      headers['x-visitor-token'] = visitorToken;
    }

    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
      credentials: 'include',
      headers,
      ...options,
    });

    handleResponseHeaders(res);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new ApiError(data.message || 'Request failed', res.status);
    }

    return res.json();
  },
};
