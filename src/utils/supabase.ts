export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1";
  };
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          extensions?: Json;
          operationName?: string;
          query?: string;
          variables?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      funfacts: {
        Row: {
          created_at: string | null;
          fact: string;
          fact_tag: string | null;
          fact_id: string;
          note: string | null;
          source: string | null;
        };
        Insert: {
          created_at?: string | null;
          fact: string;
          fact_tag?: string | null;
          fact_id?: string;
          note?: string | null;
          source?: string | null;
        };
        Update: {
          created_at?: string | null;
          fact?: string;
          fact_tag?: string | null;
          fact_id?: string;
          note?: string | null;
          source?: string | null;
        };
        Relationships: [];
      };
      games: {
        Row: {
          created_at: string | null;
          description: string | null;
          game_id: string;
          game_name: string;
          mode: string | null;
        };
        Insert: {
          created_at?: string | null;
          description?: string | null;
          game_id?: string;
          game_name: string;
          mode?: string | null;
        };
        Update: {
          created_at?: string | null;
          description?: string | null;
          game_id?: string;
          game_name?: string;
          mode?: string | null;
        };
        Relationships: [];
      };
      leaderboard: {
        Row: {
          created_at: string | null;
          game_id: string | null;
          is_public: boolean | null;
          play_id: string;
          rank: number | null;
          score: number | null;
          streak: number | null;
          updated_at: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          game_id?: string | null;
          is_public?: boolean | null;
          play_id?: string;
          rank?: number | null;
          score?: number | null;
          streak?: number | null;
          updated_at?: string | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          game_id?: string | null;
          is_public?: boolean | null;
          play_id?: string;
          rank?: number | null;
          score?: number | null;
          streak?: number | null;
          updated_at?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "leaderboard_game_id_fkey";
            columns: ["game_id"];
            isOneToOne: false;
            referencedRelation: "games";
            referencedColumns: ["game_id"];
          },
          {
            foreignKeyName: "leaderboard_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["user_id"];
          },
        ];
      };
      tags: {
        Row: {
          name: string;
          tag_id: string;
        };
        Insert: {
          name: string;
          tag_id?: string;
        };
        Update: {
          name?: string;
          tag_id?: string;
        };
        Relationships: [];
      };
      users: {
        Row: {
          created_at: string | null;
          email: string | null;
          is_admin: boolean | null;
          phone: string | null;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          email?: string | null;
          is_admin?: boolean | null;
          phone?: string | null;
          updated_at?: string | null;
          user_id?: string;
        };
        Update: {
          created_at?: string | null;
          email?: string | null;
          is_admin?: boolean | null;
          phone?: string | null;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [];
      };
      werd_tags: {
        Row: {
          id: string;
          tag_id: string | null;
          werd_id: string | null;
        };
        Insert: {
          id?: string;
          tag_id?: string | null;
          werd_id?: string | null;
        };
        Update: {
          id?: string;
          tag_id?: string | null;
          werd_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "werd_tag_tag_id_fkey";
            columns: ["tag_id"];
            isOneToOne: false;
            referencedRelation: "tags";
            referencedColumns: ["tag_id"];
          },
          {
            foreignKeyName: "werd_tag_werd_id_fkey";
            columns: ["werd_id"];
            isOneToOne: false;
            referencedRelation: "werds";
            referencedColumns: ["werd_id"];
          },
        ];
      };
      werds: {
        Row: {
          created_by: string | null;
          definition: string | null;
          image: string | null;
          is_curated: boolean | null;
          language: string | null;
          part_of_speech: string | null;
          pronunciation: string | null;
          source: string | null;
          tags: string | null;
          werd: string | null;
          werd_id: string;
        };
        Insert: {
          created_by?: string | null;
          definition?: string | null;
          image?: string | null;
          is_curated?: boolean | null;
          language?: string | null;
          part_of_speech?: string | null;
          pronunciation?: string | null;
          source?: string | null;
          tags?: string | null;
          werd?: string | null;
          werd_id?: string;
        };
        Update: {
          created_by?: string | null;
          definition?: string | null;
          image?: string | null;
          is_curated?: boolean | null;
          language?: string | null;
          part_of_speech?: string | null;
          pronunciation?: string | null;
          source?: string | null;
          tags?: string | null;
          werd?: string | null;
          werd_id?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<
  keyof Database,
  "public"
>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const;
