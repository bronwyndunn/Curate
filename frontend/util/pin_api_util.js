export const fetchFeed = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/pins`
  })
);

export const fetchPins = (userId) => (
  $.ajax({
    method: 'GET',
    url: `/api/pins`
  })
);

export const fetchBoardPins = (board_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/pins`,
    data: {board_id}
  })
);

export const fetchPin = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/pins/${id}`,
  })
);

export const createPin = (pin) => (
  $.ajax({
    method: 'POST',
    url: `/api/pins`,
    data: { pin }
  })
);

export const deletePin = (pin) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/pins/${pin.id}`
  })
);

export const searchPins = (query) => (
  $.ajax({
    method: 'GET',
    url: `/api/pins`,
    data: query 
  })
);
