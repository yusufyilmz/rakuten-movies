export interface Classification {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  age: number;
  adult: boolean;
  description: string;
  default: boolean;
}

export interface Images {
  artwork: string;
  snapshot: string;
  ribbons: any[];
}

export interface Site {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  show_image: boolean;
  scale: number;
  image: string;
}

export interface HighlightedScore {
  score: number;
  amount_of_votes: number;
  formatted_amount_of_votes: string;
  site: Site;
}

export interface Rating {
  average: number;
  scale: number;
}

export interface AudioQuality {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  abbr: string;
  image: string;
}

export interface HdrType {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  abbr: string;
  image?: any;
}

export interface PurchaseType {
  type: string;
  id: string;
  numerical_id: number;
  is_recurring: boolean;
  name: string;
  label: string;
  kind: string;
  expires_after_in_seconds?: number;
  available_time_in_seconds?: number;
}

export interface VideoQuality {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  abbr: string;
  position: number;
  image: string;
}

export interface Labels {
  audio_qualities: AudioQuality[];
  hdr_types: HdrType[];
  purchase_types: PurchaseType[];
  video_qualities: VideoQuality[];
}

export interface Contents {
  data: MovieContentData[];
  meta: Meta;
}

export interface MovieCategorize {
  type: string;
  id: string;
  numerical_id: number;
  category?: any;
  short_name: string;
  content_type: string;
  is_b2b: boolean;
  wktv_code?: any;
  only_coupon: boolean;
  is_recommendation: boolean;
  name: string;
  additional_images: AdditionalImages;
  kind: string;
  contents: Contents;
}

export interface Country {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
}

export interface Director {
  type: string;
  id: string;
  numerical_id: number;
  photo: string;
  name: string;
  born_at?: any;
}

export interface AdditionalImages {
  icon: string;
  header: string;
  pattern: string;
}

export interface Genre {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  adult: boolean;
  erotic: boolean;
  additional_images: AdditionalImages;
}

export interface Points {
  cost: number;
  reward: number;
}

export interface ExternalTier {
  type: string;
  id: string;
  price: string;
}

export interface Provider {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  external_pairing_partner_name?: any;
  pairing_flow: boolean;
  is_marketplace: boolean;
  identifier?: any;
}

export interface OrderOption {
  type: string;
  id: string;
  numerical_id: number;
  legacy_instance_type?: any;
  legacy_instance_id?: any;
  periodic_points_reward_amount: number;
  price: string;
  price_without_currency: number;
  points: Points;
  purchase_type: PurchaseType;
  video_quality: VideoQuality;
  external_tiers: ExternalTier[];
  warnings: any[];
  order_option_display_info: any;
  provider: Provider;
}

export interface Pagination {
  page: number;
  count: number;
  per_page: number;
  offset: number;
  total_pages: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface Person {
  type: string;
  id: string;
  numerical_id: number;
  photo?: any;
  name: string;
  born_at?: any;
}

export interface Source {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  url: string;
  score_scale: number;
  logo: string;
}

export interface MovieContentData {
  type: string;
  id: string;
  numerical_id: number;
  body: string;
  href: string;
  score: number;
  person: Person;
  source: Source;
  title: string;
  year: number;
  duration: number;
  label: string;
  classification: Classification;
  images: Images;
  highlighted_score: HighlightedScore;
  rating: Rating;
  labels: Labels;
}

export interface CriticReviews {
  meta: Meta;
  data: MovieContentData[];
}

export interface Pagination2 {
  page: number;
  count: number;
  per_page: number;
  offset: number;
  total_pages: number;
}

export interface Meta2 {
  pagination: Pagination2;
}

export interface Person2 {
  type: string;
  id: string;
  numerical_id: number;
  photo: string;
  name: string;
  born_at?: any;
}

export interface Source2 {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  url: string;
  score_scale: number;
  logo: string;
}

export interface Datum2 {
  type: string;
  id: string;
  numerical_id: number;
  body: string;
  href: string;
  score: number;
  person: Person2;
  source: Source2;
}

export interface UserReviews {
  meta: Meta2;
  data: Datum2[];
}

export interface Score {
  type: string;
  id: string;
  numerical_id: number;
  href: string;
  amount_of_votes?: number;
  formatted_amount_of_votes: string;
  score: number;
  highlighted: boolean;
  site: Site;
}

export interface PurchaseType2 {
  type: string;
  id: string;
  numerical_id: number;
  is_recurring: boolean;
  name: string;
  label: string;
  kind: string;
  expires_after_in_seconds?: any;
  available_time_in_seconds?: any;
}

export interface VideoQuality2 {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  abbr: string;
  position: number;
  image: string;
}

export interface Promotion {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  num_months: number;
  num_days: number;
  kind: string;
  fee: string;
}

export interface TermsCondition {
  id: number;
  title: string;
  terms_condition_category_id: number;
  required_for_user: boolean;
  accepted: boolean;
  content_to_display: string;
  printable_description: string;
  summary: string;
  url: string;
  first_acceptance_required_for_user: boolean;
}

export interface PricePlan {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  permanency_months: number;
  trial_locked_months: number;
  description: string;
  benefits: string;
  register_message: string;
  new_name: string;
  price: string;
  promotions: Promotion[];
  terms_condition: TermsCondition;
}

export interface Provider2 {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  external_pairing_partner_name?: any;
  pairing_flow: boolean;
  is_marketplace: boolean;
  identifier?: any;
}

export interface OrderOption2 {
  type: string;
  id: string;
  numerical_id: number;
  legacy_instance_type?: any;
  legacy_instance_id?: any;
  periodic_points_reward_amount: number;
  price: string;
  price_without_currency: number;
  purchase_type: PurchaseType2;
  video_quality: VideoQuality2;
  price_plan: PricePlan;
  external_tiers: any[];
  warnings: any[];
  order_option_display_info: any;
  provider: Provider2;
}

export interface DefaultGarden {
  type: string;
  id: string;
  numerical_id: number;
}

export interface AdditionalImages2 {
  background: string;
  icon: string;
  logo: string;
  support: string;
  artwork: string;
  brand: string;
  brandmail: string;
  header: string;
  subscription_logo: string;
}

export interface SubscriptionPlan {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  short_name: string;
  claim: string;
  description: string;
  additional_info: string;
  register_message?: any;
  num_contents: number;
  order_options: OrderOption2[];
  default_garden: DefaultGarden;
  additional_images: AdditionalImages2;
}

export interface Tag {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
}

export interface VideoQuality3 {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  abbr: string;
  position: number;
  image: string;
}

export interface Support {
  audio_qualities: AudioQuality[];
  video_qualities: VideoQuality3[];
  hdr_types: HdrType[];
}

export interface HdrType2 {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  abbr: string;
  image?: any;
}

export interface StreamingDrmType {
  type: string;
  id: string;
}

export interface AudioQuality2 {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  abbr: string;
  image: string;
}

export interface SubtitleLanguage {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  abbr: string;
}

export interface VideoQuality4 {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  position: number;
  abbr: string;
  image: string;
}

export interface AudioLanguage {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  abbr: string;
}

export interface Trailer {
  hdr_types: HdrType2[];
  streaming_drm_types: StreamingDrmType[];
  audio_qualities: AudioQuality2[];
  subtitle_languages: SubtitleLanguage[];
  video_qualities: VideoQuality4[];
  audio_languages: AudioLanguage[];
}

export interface Public {
  trailers: Trailer[];
  previews: any[];
  adverts: any[];
}

export interface HdrType3 {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  abbr: string;
  image?: any;
}

export interface StreamingDrmType2 {
  type: string;
  id: string;
}

export interface AudioQuality3 {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  abbr: string;
  image: string;
}

export interface SubtitleLanguage2 {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  abbr: string;
}

export interface VideoQuality5 {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  position: number;
  abbr: string;
  image: string;
}

export interface AudioLanguage2 {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  abbr: string;
}

export interface Stream {
  hdr_types: HdrType3[];
  streaming_drm_types: StreamingDrmType2[];
  audio_qualities: AudioQuality3[];
  subtitle_languages: SubtitleLanguage2[];
  video_qualities: VideoQuality5[];
  audio_languages: AudioLanguage2[];
}

export interface HdrType4 {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  abbr: string;
  image?: any;
}

export interface StreamingDrmType3 {
  type: string;
  id: string;
}

export interface AudioQuality4 {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  abbr: string;
  image: string;
}

export interface SubtitleLanguage3 {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  abbr: string;
}

export interface VideoQuality6 {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  position: number;
  abbr: string;
  image: string;
}

export interface AudioLanguage3 {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  abbr: string;
}

export interface OfflineStream {
  hdr_types: HdrType4[];
  streaming_drm_types: StreamingDrmType3[];
  audio_qualities: AudioQuality4[];
  subtitle_languages: SubtitleLanguage3[];
  video_qualities: VideoQuality6[];
  audio_languages: AudioLanguage3[];
}

export interface Private {
  streams: Stream[];
  offline_streams: OfflineStream[];
}

export interface ViewOptions {
  support: Support;
  public: Public;
  private: Private;
}

export interface AudioQuality5 {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  abbr: string;
  image: string;
}

export interface HdrType5 {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  abbr: string;
  image?: any;
}

export interface PurchaseType3 {
  type: string;
  id: string;
  numerical_id: number;
  is_recurring: boolean;
  name: string;
  label: string;
  kind: string;
  expires_after_in_seconds?: number;
  available_time_in_seconds?: number;
}

export interface VideoQuality7 {
  type: string;
  id: string;
  numerical_id: number;
  name: string;
  abbr: string;
  position: number;
  image: string;
}

export interface Actor {
  type: string;
  id: string;
  numerical_id: number;
  photo: string;
  name: string;
  born_at?: any;
}

export interface MovieDetail {
  type: string;
  id: string;
  numerical_id: number;
  title: string;
  original_title: string;
  year: number;
  short_plot: string;
  plot: string;
  duration: number;
  highlight?: any;
  duration_in_seconds: number;
  ultraviolet_enabled: boolean;
  groups: any[];
  actors: Actor[];
  awards: any[];
  classification: Classification;
  countries: Country[];
  deep_links: any;
  extras: any[];
  directors: Director[];
  genres: Genre[];
  images: Images;
  offline_enabled_for_est: boolean;
  offline_enabled_for_rent: boolean;
  offline_enabled_for_svod: boolean;
  order_options: OrderOption[];
  rating: Rating;
  critic_reviews: CriticReviews;
  user_reviews: UserReviews;
  scores: Score[];
  subscription_plans: SubscriptionPlan[];
  svod_schedules: any[];
  tags: Tag[];
  view_options: ViewOptions;
  additional_images: any;
  labels: Labels;
  video?: MovieVideo;
}

export interface StreamInfo {
  player: string;
  display_aspect_ratio: string;
  all_subtitles: any[];
  cdn: string;
  format_key: string;
  media_key: string;
  url: string;
  wrid: string;
  video_quality: string;
}

export interface MovieVideo {
  type: string;
  id: string;
  heartbeat: any;
  stream_infos: StreamInfo[];
}
