let obj = {
  "account": {
    "team": false,
    "team_display_name": "",
    "company": "",
    "user_id": 1738193,
    "country_code": "",
    "current_period": {
      "until": "2029-05-01T12:47:01",
      "from": "2023-04-17T12:47:01"
    },
    "plan_type": "Trial",
    "need_to_update_subscription": false,
    "updated_at": "2022-04-17T12:47:05",
    "now": "2022-04-17T12:47:09",
    "is_subscribed_to_marketing_emails": true,
    "pro_mode": true,
    "two_factor_auth": false,
    "id": 1737449,
    "registered_at": "2022-04-17T12:47:01",
    "feature_toggles": {
      "encryption_schema": "v3"
    },
    "full_name": "",
    "expired_screen_type": null,
    "user_type": "Trial",
    "has_sso": true,
    "tax_id": "",
    "is_email_confirmed": true,
    "address": "",
    "authorized_features": {
      "show_github_account_section": false,
      "show_team_member_activation_into_identities_tour": false,
      "generate_multi_key_pair": false,
      "show_presence_effect": false,
      "show_subscription_section": false,
      "available_github_partnership": true,
      "show_bell": false,
      "show_pop_up_onboarding_tour": false,
      "show_multi_key_promotion": true,
      "show_create_team_promotions": true,
      "show_trial_section": true
    }
  },
  "trial": {
    "trial_type": "Individual",
    "valid_until": "2029-05-01T12:47:01",
    "is_active": true,
    "downgraded_from": null,
    "created_at": "2022-04-17T12:47:01"
  },
  "student": null,
  "team": null,
  "personal_subscription": null,
  "team_subscription": null
};
$done({body: JSON.stringify(obj)});
