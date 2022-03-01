<?php

namespace IT\SSO\Firebase;

use IT\SSO\Firebase\Base as Base;
use IT\SSO\Firebase\WP_Auth as WP_Auth;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
} // Exit if accessed directly

class Callback_Factory extends Base {
	protected string $oauth_token;
	protected string $refresh_token;
	protected string $email;

	/**
	 * AJAX callback factory.
	 *
	 * @since 2.0.0
	 * @return void
	 */
	public function callback() {
		$this->oauth_token   = sanitize_key( $_REQUEST['oauth_token'] );
		$this->refresh_token = sanitize_key( $_REQUEST['refresh_token'] );
		$this->email         = sanitize_email( $_REQUEST['email'] );

		$wp_auth = new WP_Auth();

		if ( $this->email ) {
			$user = $wp_auth->auth_user( $this->email );

			if ( ! is_wp_error( $user ) ) {
				$wp_auth->signin_usermeta( $user->ID, self::SIGNIN_FACEBOOK, $this->refresh_token, $this->oauth_token );
				$login_user_url = $wp_auth->login_user( $user->ID );

				wp_send_json_success( array( 'url' => $login_user_url ) );
			}
		}

		wp_send_json_error();
	}
}
