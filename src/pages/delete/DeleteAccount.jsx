import React from "react";
import { Container, Typography } from "@mui/material";

export default function DeleteAccount() {
  return (
    <Container sx={{ my: 5 }}>
      <Typography variant="h3" textAlign="center">
        <b>Delete Account</b>
      </Typography>
      <br />
      <Typography>
        We understand that you may wish to delete your account from our app.
        Please follow the steps below to ensure your account is deleted
        properly. If you wish to delete your account from our app, please follow
        the steps outlined below. We take your privacy seriously and will
        process your request promptly.
      </Typography>
      <br />
      <br />
      <Typography variant="h5">
        <b>How to Request Account Deletion</b>
      </Typography>
      <ol>
        <li>
          <Typography>
            <b>Open Your Email Client:</b>
          </Typography>
          <br />
          <ul>
            <li>
              <Typography>
                Use the email client of your choice to compose a new email.
              </Typography>
            </li>
          </ul>
        </li>
        <br />
        <li>
          <Typography>
            <b>Compose Your Email:</b>
          </Typography>
          <br />
          <ul>
            <li>
              <Typography>
                <b>Recipient</b> masanthimanshu@gmail.com
              </Typography>
            </li>
            <li>
              <Typography>
                <b>Subject Line</b> Request to Delete My Account
              </Typography>
            </li>
            <li>
              <Typography>
                <b>Body</b> Please include the following information in your
                email
              </Typography>
              <br />
              <ul>
                <li>
                  <Typography>
                    <b>Full Name</b> Your name as registered in the app.
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <b>Email Address</b> The email address associated with your
                    account.
                  </Typography>
                </li>
                <li>
                  <Typography>
                    <b>Reason for Deletion (optional)</b> While not required,
                    providing a reason can help us improve our service.
                  </Typography>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <br />
        <li>
          <Typography>
            <b>Send Your Request:</b>
          </Typography>
          <br />
          <ul>
            <li>
              <Typography>
                After composing the email with the required information, send it
                to <i>masanthimanshu@gmail.com</i>
              </Typography>
            </li>
          </ul>
        </li>
        <br />
        <li>
          <Typography>
            <b>Confirmation:</b>
          </Typography>
          <br />
          <ul>
            <li>
              <Typography>
                You will receive a confirmation email acknowledging your
                deletion request. Our team will process your request and notify
                you once your account has been deleted.
              </Typography>
            </li>
          </ul>
        </li>
      </ol>
      <br />
      <Typography variant="h5">
        <b>Important Information</b>
      </Typography>
      <ul>
        <li>
          <Typography>
            <b>Data Retention:</b>
          </Typography>
          <br />
          <ul>
            <li>
              <Typography>
                Please be aware that your data may be retained for a short
                period after the deletion request due to backup or legal
                obligations.
              </Typography>
            </li>
          </ul>
        </li>
        <br />
        <li>
          <Typography>
            <b>Irreversible Action:</b>
          </Typography>
          <br />
          <ul>
            <li>
              <Typography>
                Account deletion is permanent. Once your account is deleted, it
                cannot be recovered, and all associated data will be lost.
              </Typography>
            </li>
          </ul>
        </li>
        <br />
        <li>
          <Typography>
            <b>Support:</b>
          </Typography>
          <br />
          <ul>
            <li>
              <Typography>
                If you have any questions or need further assistance, please
                contact us at <i>masanthimanshu@gmail.com</i>
              </Typography>
            </li>
          </ul>
        </li>
      </ul>
    </Container>
  );
}
