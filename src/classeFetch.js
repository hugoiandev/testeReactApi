export default class Apis {
  handleClickDelAll = async () => {
    await fetch("http://internal-api.dividendos.me:1124/Notification/batch-delete", {
      headers: {
        Accept: "application/json",
        Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6WyIwMzRkMDM3OC05YzcyLTRjMWYtYTM4MS04NzJmOTFjMWRlMDMiLCIwMzRkMDM3OC05YzcyLTRjMWYtYTM4MS04NzJmOTFjMWRlMDMiXSwianRpIjoiNjA5ODM0OTE2ZWNhNDIyOTk0NDNmMTg0NDA3YzEyZDMiLCJyb2xlIjoiVXNlciIsIm5iZiI6MTYyNTc0OTU1OSwiZXhwIjoxNzgzNDI5NTU5LCJpYXQiOjE2MjU3NDk1NTksImlzcyI6IkRpdmlkZW5kb3MiLCJhdWQiOiJEaXZpZGVuZG9zIn0.5oG9uJif-CJXU8LOMJ7my7QUuSv7fPWyv4uNpkUc1tQ"
      },
      method: "DELETE"
    })
  }


  handleClickDel = async (idElement) => {
    await fetch(`http://internal-api.dividendos.me:1124/Notification?notificationHistoricalGuid=${idElement}`, {
      headers: {
        Accept: "application/json",
        Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6WyIwMzRkMDM3OC05YzcyLTRjMWYtYTM4MS04NzJmOTFjMWRlMDMiLCIwMzRkMDM3OC05YzcyLTRjMWYtYTM4MS04NzJmOTFjMWRlMDMiXSwianRpIjoiNjA5ODM0OTE2ZWNhNDIyOTk0NDNmMTg0NDA3YzEyZDMiLCJyb2xlIjoiVXNlciIsIm5iZiI6MTYyNTc0OTU1OSwiZXhwIjoxNzgzNDI5NTU5LCJpYXQiOjE2MjU3NDk1NTksImlzcyI6IkRpdmlkZW5kb3MiLCJhdWQiOiJEaXZpZGVuZG9zIn0.5oG9uJif-CJXU8LOMJ7my7QUuSv7fPWyv4uNpkUc1tQ"
      },
      method: "DELETE",
    })
  }

}