export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      air_werds: {
        Row: {
          definition: string | null
          is_curated: boolean | null
          language: string | null
          part_of_speech: string | null
          pronunciation: string | null
          source: string | null
          werd: string | null
        }
        Insert: {
          definition?: string | null
          is_curated?: boolean | null
          language?: string | null
          part_of_speech?: string | null
          pronunciation?: string | null
          source?: string | null
          werd?: string | null
        }
        Update: {
          definition?: string | null
          is_curated?: boolean | null
          language?: string | null
          part_of_speech?: string | null
          pronunciation?: string | null
          source?: string | null
          werd?: string | null
        }
        Relationships: []
      }
      favorites: {
        Row: {
          created_at: string | null
          fav_id: string
          user_id: string
          werd_id: string
        }
        Insert: {
          created_at?: string | null
          fav_id?: string
          user_id: string
          werd_id: string
        }
        Update: {
          created_at?: string | null
          fav_id?: string
          user_id?: string
          werd_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_favorites_werd"
            columns: ["werd_id"]
            isOneToOne: false
            referencedRelation: "werds"
            referencedColumns: ["werd_id"]
          },
        ]
      }
      funfacts: {
        Row: {
          created_at: string | null
          fact: string
          fact_category: string | null
          fact_id: string
          note: string | null
          source: string | null
        }
        Insert: {
          created_at?: string | null
          fact: string
          fact_category?: string | null
          fact_id?: string
          note?: string | null
          source?: string | null
        }
        Update: {
          created_at?: string | null
          fact?: string
          fact_category?: string | null
          fact_id?: string
          note?: string | null
          source?: string | null
        }
        Relationships: []
      }
      games: {
        Row: {
          created_at: string | null
          description: string | null
          game_id: string
          game_name: string
          mode: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          game_id?: string
          game_name: string
          mode?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          game_id?: string
          game_name?: string
          mode?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      leaderboard: {
        Row: {
          created_at: string | null
          game_id: string | null
          is_public: boolean | null
          play_id: string
          rank: number | null
          score: number | null
          streak: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          game_id?: string | null
          is_public?: boolean | null
          play_id?: string
          rank?: number | null
          score?: number | null
          streak?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          game_id?: string | null
          is_public?: boolean | null
          play_id?: string
          rank?: number | null
          score?: number | null
          streak?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leaderboard_game_id_fkey"
            columns: ["game_id"]
            isOneToOne: false
            referencedRelation: "games"
            referencedColumns: ["game_id"]
          },
          {
            foreignKeyName: "leaderboard_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      spatial_ref_sys: {
        Row: {
          auth_name: string | null
          auth_srid: number | null
          proj4text: string | null
          srid: number
          srtext: string | null
        }
        Insert: {
          auth_name?: string | null
          auth_srid?: number | null
          proj4text?: string | null
          srid: number
          srtext?: string | null
        }
        Update: {
          auth_name?: string | null
          auth_srid?: number | null
          proj4text?: string | null
          srid?: number
          srtext?: string | null
        }
        Relationships: []
      }
      tags: {
        Row: {
          tag_id: string
          tag_name: string
        }
        Insert: {
          tag_id?: string
          tag_name: string
        }
        Update: {
          tag_id?: string
          tag_name?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          email: string | null
          is_admin: boolean | null
          phone: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          is_admin?: boolean | null
          phone?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Update: {
          created_at?: string | null
          email?: string | null
          is_admin?: boolean | null
          phone?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      werd_tags: {
        Row: {
          created_at: string
          id: string
          tag: string
          tag_id: string
          werd: string
          werd_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          tag: string
          tag_id: string
          werd: string
          werd_id: string
        }
        Update: {
          created_at?: string
          id?: string
          tag?: string
          tag_id?: string
          werd?: string
          werd_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "werd_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["tag_id"]
          },
          {
            foreignKeyName: "werd_tags_werd_id_fkey"
            columns: ["werd_id"]
            isOneToOne: false
            referencedRelation: "werds"
            referencedColumns: ["werd_id"]
          },
        ]
      }
      werds: {
        Row: {
          created_at: string
          created_by: string | null
          definition: string | null
          is_curated: boolean | null
          language: string | null
          last_modified: string
          origin: string | null
          part_of_speech: string | null
          pronunciation: string | null
          source_1: string | null
          source_2: string | null
          submission_status: Database["public"]["Enums"]["werd_submission_status"]
          tags: string | null
          werd: string | null
          werd_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          definition?: string | null
          is_curated?: boolean | null
          language?: string | null
          last_modified?: string
          origin?: string | null
          part_of_speech?: string | null
          pronunciation?: string | null
          source_1?: string | null
          source_2?: string | null
          submission_status?: Database["public"]["Enums"]["werd_submission_status"]
          tags?: string | null
          werd?: string | null
          werd_id?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          definition?: string | null
          is_curated?: boolean | null
          language?: string | null
          last_modified?: string
          origin?: string | null
          part_of_speech?: string | null
          pronunciation?: string | null
          source_1?: string | null
          source_2?: string | null
          submission_status?: Database["public"]["Enums"]["werd_submission_status"]
          tags?: string | null
          werd?: string | null
          werd_id?: string
        }
        Relationships: []
      }
      werds_import: {
        Row: {
          created_at: string | null
          created_by: string | null
          definition: string | null
          is_curated: boolean | null
          language: string | null
          origin: string | null
          part_of_speech: string | null
          pronunciation: string | null
          source_1: string | null
          source_2: string | null
          tags: string | null
          werd: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          definition?: string | null
          is_curated?: boolean | null
          language?: string | null
          origin?: string | null
          part_of_speech?: string | null
          pronunciation?: string | null
          source_1?: string | null
          source_2?: string | null
          tags?: string | null
          werd?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          definition?: string | null
          is_curated?: boolean | null
          language?: string | null
          origin?: string | null
          part_of_speech?: string | null
          pronunciation?: string | null
          source_1?: string | null
          source_2?: string | null
          tags?: string | null
          werd?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      geography_columns: {
        Row: {
          coord_dimension: number | null
          f_geography_column: unknown
          f_table_catalog: unknown
          f_table_name: unknown
          f_table_schema: unknown
          srid: number | null
          type: string | null
        }
        Relationships: []
      }
      geometry_columns: {
        Row: {
          coord_dimension: number | null
          f_geometry_column: unknown
          f_table_catalog: string | null
          f_table_name: unknown
          f_table_schema: unknown
          srid: number | null
          type: string | null
        }
        Insert: {
          coord_dimension?: number | null
          f_geometry_column?: unknown
          f_table_catalog?: string | null
          f_table_name?: unknown
          f_table_schema?: unknown
          srid?: number | null
          type?: string | null
        }
        Update: {
          coord_dimension?: number | null
          f_geometry_column?: unknown
          f_table_catalog?: string | null
          f_table_name?: unknown
          f_table_schema?: unknown
          srid?: number | null
          type?: string | null
        }
        Relationships: []
      }
      raster_columns: {
        Row: {
          blocksize_x: number | null
          blocksize_y: number | null
          extent: unknown
          nodata_values: number[] | null
          num_bands: number | null
          out_db: boolean[] | null
          pixel_types: string[] | null
          r_raster_column: unknown
          r_table_catalog: unknown
          r_table_name: unknown
          r_table_schema: unknown
          regular_blocking: boolean | null
          same_alignment: boolean | null
          scale_x: number | null
          scale_y: number | null
          spatial_index: boolean | null
          srid: number | null
        }
        Relationships: []
      }
      raster_overviews: {
        Row: {
          o_raster_column: unknown
          o_table_catalog: unknown
          o_table_name: unknown
          o_table_schema: unknown
          overview_factor: number | null
          r_raster_column: unknown
          r_table_catalog: unknown
          r_table_name: unknown
          r_table_schema: unknown
        }
        Relationships: []
      }
    }
    Functions: {
      __st_countagg_transfn: {
        Args: {
          agg: Database["public"]["CompositeTypes"]["agg_count"]
          exclude_nodata_value?: boolean
          nband?: number
          rast: unknown
          sample_percent?: number
        }
        Returns: Database["public"]["CompositeTypes"]["agg_count"]
        SetofOptions: {
          from: "*"
          to: "agg_count"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      _add_overview_constraint: {
        Args: {
          factor: number
          ovcolumn: unknown
          ovschema: unknown
          ovtable: unknown
          refcolumn: unknown
          refschema: unknown
          reftable: unknown
        }
        Returns: boolean
      }
      _add_raster_constraint: {
        Args: { cn: unknown; sql: string }
        Returns: boolean
      }
      _add_raster_constraint_alignment: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean
      }
      _add_raster_constraint_blocksize: {
        Args: {
          axis: string
          rastcolumn: unknown
          rastschema: unknown
          rasttable: unknown
        }
        Returns: boolean
      }
      _add_raster_constraint_coverage_tile: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean
      }
      _add_raster_constraint_extent: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean
      }
      _add_raster_constraint_nodata_values: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean
      }
      _add_raster_constraint_num_bands: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean
      }
      _add_raster_constraint_out_db: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean
      }
      _add_raster_constraint_pixel_types: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean
      }
      _add_raster_constraint_scale: {
        Args: {
          axis: string
          rastcolumn: unknown
          rastschema: unknown
          rasttable: unknown
        }
        Returns: boolean
      }
      _add_raster_constraint_spatially_unique: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean
      }
      _add_raster_constraint_srid: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean
      }
      _drop_overview_constraint: {
        Args: { ovcolumn: unknown; ovschema: unknown; ovtable: unknown }
        Returns: boolean
      }
      _drop_raster_constraint: {
        Args: { cn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean
      }
      _drop_raster_constraint_alignment: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean
      }
      _drop_raster_constraint_blocksize: {
        Args: {
          axis: string
          rastcolumn: unknown
          rastschema: unknown
          rasttable: unknown
        }
        Returns: boolean
      }
      _drop_raster_constraint_coverage_tile: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean
      }
      _drop_raster_constraint_extent: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean
      }
      _drop_raster_constraint_nodata_values: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean
      }
      _drop_raster_constraint_num_bands: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean
      }
      _drop_raster_constraint_out_db: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean
      }
      _drop_raster_constraint_pixel_types: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean
      }
      _drop_raster_constraint_regular_blocking: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean
      }
      _drop_raster_constraint_scale: {
        Args: {
          axis: string
          rastcolumn: unknown
          rastschema: unknown
          rasttable: unknown
        }
        Returns: boolean
      }
      _drop_raster_constraint_spatially_unique: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean
      }
      _drop_raster_constraint_srid: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean
      }
      _overview_constraint: {
        Args: {
          factor: number
          ov: unknown
          refcolumn: unknown
          refschema: unknown
          reftable: unknown
        }
        Returns: boolean
      }
      _overview_constraint_info: {
        Args: { ovcolumn: unknown; ovschema: unknown; ovtable: unknown }
        Returns: Record<string, unknown>
      }
      _pgr_articulationpoints: {
        Args: { edges_sql: string }
        Returns: Record<string, unknown>[]
      }
      _pgr_astar:
        | {
            Args: {
              combinations_sql: string
              directed?: boolean
              edges_sql: string
              epsilon?: number
              factor?: number
              heuristic?: number
              only_cost?: boolean
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              directed?: boolean
              edges_sql: string
              end_vids: unknown
              epsilon?: number
              factor?: number
              heuristic?: number
              normal?: boolean
              only_cost?: boolean
              start_vids: unknown
            }
            Returns: Record<string, unknown>[]
          }
      _pgr_bellmanford:
        | {
            Args: {
              combinations_sql: string
              directed: boolean
              edges_sql: string
              only_cost: boolean
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              directed: boolean
              edges_sql: string
              from_vids: unknown
              only_cost: boolean
              to_vids: unknown
            }
            Returns: Record<string, unknown>[]
          }
      _pgr_biconnectedcomponents: {
        Args: { edges_sql: string }
        Returns: Record<string, unknown>[]
      }
      _pgr_binarybreadthfirstsearch:
        | {
            Args: {
              combinations_sql: string
              directed?: boolean
              edges_sql: string
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              directed?: boolean
              edges_sql: string
              from_vids: unknown
              to_vids: unknown
            }
            Returns: Record<string, unknown>[]
          }
      _pgr_bipartite: {
        Args: { edges_sql: string }
        Returns: Record<string, unknown>[]
      }
      _pgr_boost_version: { Args: never; Returns: string }
      _pgr_breadthfirstsearch: {
        Args: {
          directed: boolean
          edges_sql: string
          from_vids: unknown
          max_depth: number
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_bridges: {
        Args: { edges_sql: string }
        Returns: Record<string, unknown>[]
      }
      _pgr_build_type: { Args: never; Returns: string }
      _pgr_checkquery: { Args: { "": string }; Returns: string }
      _pgr_checkverttab: {
        Args: {
          columnsarr: string[]
          fnname?: string
          reporterrs?: number
          vertname: string
        }
        Returns: Record<string, unknown>
      }
      _pgr_chinesepostman: {
        Args: { edges_sql: string; only_cost: boolean }
        Returns: Record<string, unknown>[]
      }
      _pgr_compilation_date: { Args: never; Returns: string }
      _pgr_compiler_version: { Args: never; Returns: string }
      _pgr_connectedcomponents: {
        Args: { edges_sql: string }
        Returns: Record<string, unknown>[]
      }
      _pgr_contraction: {
        Args: {
          contraction_order: number[]
          directed?: boolean
          edges_sql: string
          forbidden_vertices?: number[]
          max_cycles?: number
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_createindex:
        | {
            Args: {
              colname: string
              fnname?: string
              indext: string
              reporterrs?: number
              sname: string
              tname: string
            }
            Returns: undefined
          }
        | {
            Args: {
              colname: string
              fnname?: string
              indext: string
              reporterrs?: number
              tabname: string
            }
            Returns: undefined
          }
      _pgr_cuthillmckeeordering: {
        Args: { "": string }
        Returns: Record<string, unknown>[]
      }
      _pgr_depthfirstsearch: {
        Args: {
          directed: boolean
          edges_sql: string
          max_depth: number
          root_vids: unknown
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_dijkstra:
        | {
            Args: {
              combinations_sql: string
              directed?: boolean
              edges_sql: string
              normal?: boolean
              only_cost?: boolean
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              combinations_sql: string
              directed: boolean
              edges_sql: string
              global: boolean
              n_goals: number
              only_cost: boolean
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              directed?: boolean
              edges_sql: string
              end_vids: unknown
              n_goals?: number
              normal?: boolean
              only_cost?: boolean
              start_vids: unknown
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              directed: boolean
              edges_sql: string
              end_vids: unknown
              global: boolean
              n_goals: number
              normal: boolean
              only_cost: boolean
              start_vids: unknown
            }
            Returns: Record<string, unknown>[]
          }
      _pgr_dijkstravia: {
        Args: {
          directed: boolean
          edges_sql: string
          strict: boolean
          u_turn_on_edge: boolean
          via_vids: unknown
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_drivingdistance: {
        Args: {
          directed?: boolean
          distance: number
          edges_sql: string
          equicost?: boolean
          start_vids: unknown
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_edgecoloring: {
        Args: { edges_sql: string }
        Returns: Record<string, unknown>[]
      }
      _pgr_edwardmoore:
        | {
            Args: {
              combinations_sql: string
              directed?: boolean
              edges_sql: string
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              directed?: boolean
              edges_sql: string
              from_vids: unknown
              to_vids: unknown
            }
            Returns: Record<string, unknown>[]
          }
      _pgr_endpoint: { Args: { g: unknown }; Returns: unknown }
      _pgr_floydwarshall: {
        Args: { directed: boolean; edges_sql: string }
        Returns: Record<string, unknown>[]
      }
      _pgr_get_statement: { Args: { o_sql: string }; Returns: string }
      _pgr_getcolumnname:
        | {
            Args: {
              col: string
              fnname?: string
              reporterrs?: number
              sname: string
              tname: string
            }
            Returns: string
          }
        | {
            Args: {
              col: string
              fnname?: string
              reporterrs?: number
              tab: string
            }
            Returns: string
          }
      _pgr_getcolumntype:
        | {
            Args: {
              cname: string
              fnname?: string
              reporterrs?: number
              sname: string
              tname: string
            }
            Returns: string
          }
        | {
            Args: {
              col: string
              fnname?: string
              reporterrs?: number
              tab: string
            }
            Returns: string
          }
      _pgr_gettablename: {
        Args: { fnname?: string; reporterrs?: number; tab: string }
        Returns: Record<string, unknown>
      }
      _pgr_git_hash: { Args: never; Returns: string }
      _pgr_hawickcircuits: {
        Args: { "": string }
        Returns: Record<string, unknown>[]
      }
      _pgr_iscolumnindexed:
        | {
            Args: {
              cname: string
              fnname?: string
              reporterrs?: number
              sname: string
              tname: string
            }
            Returns: boolean
          }
        | {
            Args: {
              col: string
              fnname?: string
              reporterrs?: number
              tab: string
            }
            Returns: boolean
          }
      _pgr_iscolumnintable: {
        Args: { col: string; tab: string }
        Returns: boolean
      }
      _pgr_isplanar: { Args: { "": string }; Returns: boolean }
      _pgr_johnson: {
        Args: { directed: boolean; edges_sql: string }
        Returns: Record<string, unknown>[]
      }
      _pgr_ksp: {
        Args: {
          directed: boolean
          edges_sql: string
          end_vid: number
          heap_paths: boolean
          k: number
          start_vid: number
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_lengauertarjandominatortree: {
        Args: { edges_sql: string; root_vid: number }
        Returns: Record<string, unknown>[]
      }
      _pgr_lib_version: { Args: never; Returns: string }
      _pgr_linegraphfull: {
        Args: { "": string }
        Returns: Record<string, unknown>[]
      }
      _pgr_makeconnected: {
        Args: { "": string }
        Returns: Record<string, unknown>[]
      }
      _pgr_maxcardinalitymatch: {
        Args: { directed: boolean; edges_sql: string }
        Returns: Record<string, unknown>[]
      }
      _pgr_maxflow:
        | {
            Args: {
              algorithm?: number
              combinations_sql: string
              edges_sql: string
              only_flow?: boolean
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              algorithm?: number
              edges_sql: string
              only_flow?: boolean
              sources: unknown
              targets: unknown
            }
            Returns: Record<string, unknown>[]
          }
      _pgr_maxflowmincost:
        | {
            Args: {
              combinations_sql: string
              edges_sql: string
              only_cost?: boolean
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              edges_sql: string
              only_cost?: boolean
              sources: unknown
              targets: unknown
            }
            Returns: Record<string, unknown>[]
          }
      _pgr_msg: {
        Args: { fnname: string; msg?: string; msgkind: number }
        Returns: undefined
      }
      _pgr_onerror: {
        Args: {
          errcond: boolean
          fnname: string
          hinto?: string
          msgerr: string
          msgok?: string
          reporterrs: number
        }
        Returns: undefined
      }
      _pgr_operating_system: { Args: never; Returns: string }
      _pgr_parameter_check: {
        Args: { big?: boolean; fn: string; sql: string }
        Returns: boolean
      }
      _pgr_pgsql_version: { Args: never; Returns: string }
      _pgr_pointtoid: {
        Args: {
          point: unknown
          srid: number
          tolerance: number
          vertname: string
        }
        Returns: number
      }
      _pgr_quote_ident: { Args: { idname: string }; Returns: string }
      _pgr_sequentialvertexcoloring: {
        Args: { edges_sql: string }
        Returns: Record<string, unknown>[]
      }
      _pgr_startpoint: { Args: { g: unknown }; Returns: unknown }
      _pgr_stoerwagner: {
        Args: { edges_sql: string }
        Returns: Record<string, unknown>[]
      }
      _pgr_strongcomponents: {
        Args: { edges_sql: string }
        Returns: Record<string, unknown>[]
      }
      _pgr_topologicalsort: {
        Args: { edges_sql: string }
        Returns: Record<string, unknown>[]
      }
      _pgr_transitiveclosure: {
        Args: { edges_sql: string }
        Returns: Record<string, unknown>[]
      }
      _pgr_trsp: {
        Args: {
          directed: boolean
          has_reverse_cost: boolean
          source_eid: number
          source_pos: number
          sql: string
          target_eid: number
          target_pos: number
          turn_restrict_sql?: string
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_trspviavertices: {
        Args: {
          directed: boolean
          has_rcost: boolean
          sql: string
          turn_restrict_sql?: string
          vids: number[]
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_tsp: {
        Args: {
          cooling_factor?: number
          end_id?: number
          final_temperature?: number
          initial_temperature?: number
          matrix_row_sql: string
          max_changes_per_temperature?: number
          max_consecutive_non_changes?: number
          max_processing_time?: number
          randomize?: boolean
          start_id?: number
          tries_per_temperature?: number
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_tspeuclidean: {
        Args: {
          cooling_factor?: number
          coordinates_sql: string
          end_id?: number
          final_temperature?: number
          initial_temperature?: number
          max_changes_per_temperature?: number
          max_consecutive_non_changes?: number
          max_processing_time?: number
          randomize?: boolean
          start_id?: number
          tries_per_temperature?: number
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_versionless: { Args: { v1: string; v2: string }; Returns: boolean }
      _pgr_withpoints:
        | {
            Args: {
              combinations_sql: string
              details: boolean
              directed: boolean
              driving_side: string
              edges_sql: string
              only_cost?: boolean
              points_sql: string
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              details: boolean
              directed: boolean
              driving_side: string
              edges_sql: string
              end_pids: unknown
              normal?: boolean
              only_cost?: boolean
              points_sql: string
              start_pids: unknown
            }
            Returns: Record<string, unknown>[]
          }
      _pgr_withpointsdd: {
        Args: {
          details?: boolean
          directed?: boolean
          distance: number
          driving_side?: string
          edges_sql: string
          equicost?: boolean
          points_sql: string
          start_pid: unknown
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_withpointsksp: {
        Args: {
          details: boolean
          directed: boolean
          driving_side: string
          edges_sql: string
          end_pid: number
          heap_paths: boolean
          k: number
          points_sql: string
          start_pid: number
        }
        Returns: Record<string, unknown>[]
      }
      _pgr_withpointsvia: {
        Args: {
          directed?: boolean
          fraction: number[]
          sql: string
          via_edges: number[]
        }
        Returns: Record<string, unknown>[]
      }
      _postgis_deprecate: {
        Args: { newname: string; oldname: string; version: string }
        Returns: undefined
      }
      _postgis_index_extent: {
        Args: { col: string; tbl: unknown }
        Returns: unknown
      }
      _postgis_pgsql_version: { Args: never; Returns: string }
      _postgis_scripts_pgsql_version: { Args: never; Returns: string }
      _postgis_selectivity: {
        Args: { att_name: string; geom: unknown; mode?: string; tbl: unknown }
        Returns: number
      }
      _postgis_stats: {
        Args: { ""?: string; att_name: string; tbl: unknown }
        Returns: string
      }
      _raster_constraint_info_alignment: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean
      }
      _raster_constraint_info_blocksize: {
        Args: {
          axis: string
          rastcolumn: unknown
          rastschema: unknown
          rasttable: unknown
        }
        Returns: number
      }
      _raster_constraint_info_coverage_tile: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean
      }
      _raster_constraint_info_extent: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: unknown
      }
      _raster_constraint_info_index: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean
      }
      _raster_constraint_info_nodata_values: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: number[]
      }
      _raster_constraint_info_num_bands: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: number
      }
      _raster_constraint_info_out_db: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean[]
      }
      _raster_constraint_info_pixel_types: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: string[]
      }
      _raster_constraint_info_regular_blocking: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean
      }
      _raster_constraint_info_scale: {
        Args: {
          axis: string
          rastcolumn: unknown
          rastschema: unknown
          rasttable: unknown
        }
        Returns: number
      }
      _raster_constraint_info_spatially_unique: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: boolean
      }
      _raster_constraint_info_srid: {
        Args: { rastcolumn: unknown; rastschema: unknown; rasttable: unknown }
        Returns: number
      }
      _raster_constraint_nodata_values: {
        Args: { rast: unknown }
        Returns: number[]
      }
      _raster_constraint_out_db: { Args: { rast: unknown }; Returns: boolean[] }
      _raster_constraint_pixel_types: {
        Args: { rast: unknown }
        Returns: string[]
      }
      _st_3dintersects: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_aspect4ma: {
        Args: { pos: number[]; userargs?: string[]; value: number[] }
        Returns: number
      }
      _st_asraster: {
        Args: {
          geom: unknown
          gridx?: number
          gridy?: number
          height?: number
          nodataval?: number[]
          pixeltype?: string[]
          scalex?: number
          scaley?: number
          skewx?: number
          skewy?: number
          touched?: boolean
          upperleftx?: number
          upperlefty?: number
          value?: number[]
          width?: number
        }
        Returns: unknown
      }
      _st_clip: {
        Args: {
          crop?: boolean
          geom: unknown
          nband: number[]
          nodataval?: number[]
          rast: unknown
        }
        Returns: unknown
      }
      _st_colormap: {
        Args: {
          colormap: string
          method?: string
          nband: number
          rast: unknown
        }
        Returns: unknown
      }
      _st_contains:
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
        | {
            Args: {
              nband1: number
              nband2: number
              rast1: unknown
              rast2: unknown
            }
            Returns: boolean
          }
      _st_containsproperly:
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
        | {
            Args: {
              nband1: number
              nband2: number
              rast1: unknown
              rast2: unknown
            }
            Returns: boolean
          }
      _st_convertarray4ma: { Args: { value: number[] }; Returns: number[] }
      _st_count: {
        Args: {
          exclude_nodata_value?: boolean
          nband?: number
          rast: unknown
          sample_percent?: number
        }
        Returns: number
      }
      _st_countagg_finalfn: {
        Args: { agg: Database["public"]["CompositeTypes"]["agg_count"] }
        Returns: number
      }
      _st_countagg_transfn:
        | {
            Args: {
              agg: Database["public"]["CompositeTypes"]["agg_count"]
              exclude_nodata_value: boolean
              rast: unknown
            }
            Returns: Database["public"]["CompositeTypes"]["agg_count"]
            SetofOptions: {
              from: "*"
              to: "agg_count"
              isOneToOne: true
              isSetofReturn: false
            }
          }
        | {
            Args: {
              agg: Database["public"]["CompositeTypes"]["agg_count"]
              exclude_nodata_value: boolean
              nband: number
              rast: unknown
            }
            Returns: Database["public"]["CompositeTypes"]["agg_count"]
            SetofOptions: {
              from: "*"
              to: "agg_count"
              isOneToOne: true
              isSetofReturn: false
            }
          }
        | {
            Args: {
              agg: Database["public"]["CompositeTypes"]["agg_count"]
              exclude_nodata_value: boolean
              nband: number
              rast: unknown
              sample_percent: number
            }
            Returns: Database["public"]["CompositeTypes"]["agg_count"]
            SetofOptions: {
              from: "*"
              to: "agg_count"
              isOneToOne: true
              isSetofReturn: false
            }
          }
      _st_coveredby:
        | { Args: { geog1: unknown; geog2: unknown }; Returns: boolean }
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
        | {
            Args: {
              nband1: number
              nband2: number
              rast1: unknown
              rast2: unknown
            }
            Returns: boolean
          }
      _st_covers:
        | { Args: { geog1: unknown; geog2: unknown }; Returns: boolean }
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
        | {
            Args: {
              nband1: number
              nband2: number
              rast1: unknown
              rast2: unknown
            }
            Returns: boolean
          }
      _st_crosses: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_dfullywithin: {
        Args: {
          distance: number
          nband1: number
          nband2: number
          rast1: unknown
          rast2: unknown
        }
        Returns: boolean
      }
      _st_dwithin:
        | {
            Args: {
              geog1: unknown
              geog2: unknown
              tolerance: number
              use_spheroid?: boolean
            }
            Returns: boolean
          }
        | {
            Args: {
              distance: number
              nband1: number
              nband2: number
              rast1: unknown
              rast2: unknown
            }
            Returns: boolean
          }
      _st_equals: { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      _st_gdalwarp: {
        Args: {
          algorithm?: string
          gridx?: number
          gridy?: number
          height?: number
          maxerr?: number
          rast: unknown
          scalex?: number
          scaley?: number
          skewx?: number
          skewy?: number
          srid?: number
          width?: number
        }
        Returns: unknown
      }
      _st_grayscale4ma: {
        Args: { pos: number[]; userargs?: string[]; value: number[] }
        Returns: number
      }
      _st_hillshade4ma: {
        Args: { pos: number[]; userargs?: string[]; value: number[] }
        Returns: number
      }
      _st_histogram: {
        Args: {
          bins?: number
          exclude_nodata_value?: boolean
          max?: number
          min?: number
          nband?: number
          rast: unknown
          right?: boolean
          sample_percent?: number
          width?: number[]
        }
        Returns: Record<string, unknown>[]
      }
      _st_intersects:
        | {
            Args: { geom: unknown; nband?: number; rast: unknown }
            Returns: boolean
          }
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
        | {
            Args: {
              nband1: number
              nband2: number
              rast1: unknown
              rast2: unknown
            }
            Returns: boolean
          }
      _st_linecrossingdirection: {
        Args: { line1: unknown; line2: unknown }
        Returns: number
      }
      _st_longestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      _st_mapalgebra:
        | {
            Args: {
              callbackfunc: unknown
              customextent?: unknown
              distancex?: number
              distancey?: number
              extenttype?: string
              mask?: number[]
              pixeltype?: string
              rastbandargset: Database["public"]["CompositeTypes"]["rastbandarg"][]
              userargs?: string[]
              weighted?: boolean
            }
            Returns: unknown
          }
        | {
            Args: {
              expression: string
              extenttype?: string
              nodata1expr?: string
              nodata2expr?: string
              nodatanodataval?: number
              pixeltype?: string
              rastbandargset: Database["public"]["CompositeTypes"]["rastbandarg"][]
            }
            Returns: unknown
          }
      _st_maxdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      _st_neighborhood: {
        Args: {
          band: number
          columnx: number
          distancex: number
          distancey: number
          exclude_nodata_value?: boolean
          rast: unknown
          rowy: number
        }
        Returns: number[]
      }
      _st_orderingequals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      _st_overlaps:
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
        | {
            Args: {
              nband1: number
              nband2: number
              rast1: unknown
              rast2: unknown
            }
            Returns: boolean
          }
      _st_pixelascentroids: {
        Args: {
          band?: number
          columnx?: number
          exclude_nodata_value?: boolean
          rast: unknown
          rowy?: number
        }
        Returns: {
          geom: unknown
          val: number
          x: number
          y: number
        }[]
      }
      _st_pixelaspolygons: {
        Args: {
          band?: number
          columnx?: number
          exclude_nodata_value?: boolean
          rast: unknown
          rowy?: number
        }
        Returns: {
          geom: unknown
          val: number
          x: number
          y: number
        }[]
      }
      _st_quantile: {
        Args: {
          exclude_nodata_value?: boolean
          nband?: number
          quantiles?: number[]
          rast: unknown
          sample_percent?: number
        }
        Returns: Record<string, unknown>[]
      }
      _st_rastertoworldcoord: {
        Args: { columnx?: number; rast: unknown; rowy?: number }
        Returns: Record<string, unknown>
      }
      _st_reclass: {
        Args: {
          rast: unknown
          reclassargset: Database["public"]["CompositeTypes"]["reclassarg"][]
        }
        Returns: unknown
      }
      _st_roughness4ma: {
        Args: { pos: number[]; userargs?: string[]; value: number[] }
        Returns: number
      }
      _st_samealignment_finalfn: {
        Args: { agg: Database["public"]["CompositeTypes"]["agg_samealignment"] }
        Returns: boolean
      }
      _st_samealignment_transfn: {
        Args: {
          agg: Database["public"]["CompositeTypes"]["agg_samealignment"]
          rast: unknown
        }
        Returns: Database["public"]["CompositeTypes"]["agg_samealignment"]
        SetofOptions: {
          from: "*"
          to: "agg_samealignment"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      _st_setvalues: {
        Args: {
          hasnosetvalue?: boolean
          keepnodata?: boolean
          nband: number
          newvalueset: number[]
          noset?: boolean[]
          nosetvalue?: number
          rast: unknown
          x: number
          y: number
        }
        Returns: unknown
      }
      _st_slope4ma: {
        Args: { pos: number[]; userargs?: string[]; value: number[] }
        Returns: number
      }
      _st_sortablehash: { Args: { geom: unknown }; Returns: number }
      _st_summarystats: {
        Args: {
          exclude_nodata_value?: boolean
          nband?: number
          rast: unknown
          sample_percent?: number
        }
        Returns: Database["public"]["CompositeTypes"]["summarystats"]
        SetofOptions: {
          from: "*"
          to: "summarystats"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      _st_tile: {
        Args: {
          height: number
          nband?: number[]
          nodataval?: number
          padwithnodata?: boolean
          rast: unknown
          width: number
        }
        Returns: unknown[]
      }
      _st_touches:
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
        | {
            Args: {
              nband1: number
              nband2: number
              rast1: unknown
              rast2: unknown
            }
            Returns: boolean
          }
      _st_tpi4ma: {
        Args: { pos: number[]; userargs?: string[]; value: number[] }
        Returns: number
      }
      _st_tri4ma: {
        Args: { pos: number[]; userargs?: string[]; value: number[] }
        Returns: number
      }
      _st_valuecount:
        | {
            Args: {
              exclude_nodata_value?: boolean
              nband?: number
              rast: unknown
              roundto?: number
              searchvalues?: number[]
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              exclude_nodata_value?: boolean
              nband?: number
              rastercolumn: string
              rastertable: string
              roundto?: number
              searchvalues?: number[]
            }
            Returns: Record<string, unknown>[]
          }
      _st_voronoi: {
        Args: {
          clip?: unknown
          g1: unknown
          return_polygons?: boolean
          tolerance?: number
        }
        Returns: unknown
      }
      _st_within:
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
        | {
            Args: {
              nband1: number
              nband2: number
              rast1: unknown
              rast2: unknown
            }
            Returns: boolean
          }
      _st_worldtorastercoord: {
        Args: { latitude?: number; longitude?: number; rast: unknown }
        Returns: Record<string, unknown>
      }
      _updaterastersrid: {
        Args: {
          column_name: unknown
          new_srid: number
          schema_name: unknown
          table_name: unknown
        }
        Returns: boolean
      }
      addauth: { Args: { "": string }; Returns: boolean }
      addgeometrycolumn:
        | {
            Args: {
              catalog_name: string
              column_name: string
              new_dim: number
              new_srid_in: number
              new_type: string
              schema_name: string
              table_name: string
              use_typmod?: boolean
            }
            Returns: string
          }
        | {
            Args: {
              column_name: string
              new_dim: number
              new_srid: number
              new_type: string
              schema_name: string
              table_name: string
              use_typmod?: boolean
            }
            Returns: string
          }
        | {
            Args: {
              column_name: string
              new_dim: number
              new_srid: number
              new_type: string
              table_name: string
              use_typmod?: boolean
            }
            Returns: string
          }
      addoverviewconstraints:
        | {
            Args: {
              ovcolumn: unknown
              ovfactor: number
              ovschema: unknown
              ovtable: unknown
              refcolumn: unknown
              refschema: unknown
              reftable: unknown
            }
            Returns: boolean
          }
        | {
            Args: {
              ovcolumn: unknown
              ovfactor: number
              ovtable: unknown
              refcolumn: unknown
              reftable: unknown
            }
            Returns: boolean
          }
      addrasterconstraints:
        | {
            Args: {
              blocksize_x?: boolean
              blocksize_y?: boolean
              extent?: boolean
              nodata_values?: boolean
              num_bands?: boolean
              out_db?: boolean
              pixel_types?: boolean
              rastcolumn: unknown
              rastschema: unknown
              rasttable: unknown
              regular_blocking?: boolean
              same_alignment?: boolean
              scale_x?: boolean
              scale_y?: boolean
              srid?: boolean
            }
            Returns: boolean
          }
        | {
            Args: {
              constraints: string[]
              rastcolumn: unknown
              rastschema: unknown
              rasttable: unknown
            }
            Returns: boolean
          }
        | {
            Args: {
              blocksize_x?: boolean
              blocksize_y?: boolean
              extent?: boolean
              nodata_values?: boolean
              num_bands?: boolean
              out_db?: boolean
              pixel_types?: boolean
              rastcolumn: unknown
              rasttable: unknown
              regular_blocking?: boolean
              same_alignment?: boolean
              scale_x?: boolean
              scale_y?: boolean
              srid?: boolean
            }
            Returns: boolean
          }
        | {
            Args: {
              constraints: string[]
              rastcolumn: unknown
              rasttable: unknown
            }
            Returns: boolean
          }
      bytea_to_text: { Args: { data: string }; Returns: string }
      dblink: { Args: { "": string }; Returns: Record<string, unknown>[] }
      dblink_cancel_query: { Args: { "": string }; Returns: string }
      dblink_close: { Args: { "": string }; Returns: string }
      dblink_connect: { Args: { "": string }; Returns: string }
      dblink_connect_u: { Args: { "": string }; Returns: string }
      dblink_current_query: { Args: never; Returns: string }
      dblink_disconnect:
        | { Args: never; Returns: string }
        | { Args: { "": string }; Returns: string }
      dblink_error_message: { Args: { "": string }; Returns: string }
      dblink_exec: { Args: { "": string }; Returns: string }
      dblink_fdw_validator: {
        Args: { catalog: unknown; options: string[] }
        Returns: undefined
      }
      dblink_get_connections: { Args: never; Returns: string[] }
      dblink_get_notify:
        | { Args: { conname: string }; Returns: Record<string, unknown>[] }
        | { Args: never; Returns: Record<string, unknown>[] }
      dblink_get_pkey: {
        Args: { "": string }
        Returns: Database["public"]["CompositeTypes"]["dblink_pkey_results"][]
        SetofOptions: {
          from: "*"
          to: "dblink_pkey_results"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      dblink_get_result: {
        Args: { "": string }
        Returns: Record<string, unknown>[]
      }
      dblink_is_busy: { Args: { "": string }; Returns: number }
      disablelongtransactions: { Args: never; Returns: string }
      dropgeometrycolumn:
        | {
            Args: {
              catalog_name: string
              column_name: string
              schema_name: string
              table_name: string
            }
            Returns: string
          }
        | {
            Args: {
              column_name: string
              schema_name: string
              table_name: string
            }
            Returns: string
          }
        | { Args: { column_name: string; table_name: string }; Returns: string }
      dropgeometrytable:
        | {
            Args: {
              catalog_name: string
              schema_name: string
              table_name: string
            }
            Returns: string
          }
        | { Args: { schema_name: string; table_name: string }; Returns: string }
        | { Args: { table_name: string }; Returns: string }
      dropoverviewconstraints:
        | {
            Args: { ovcolumn: unknown; ovschema: unknown; ovtable: unknown }
            Returns: boolean
          }
        | { Args: { ovcolumn: unknown; ovtable: unknown }; Returns: boolean }
      droprasterconstraints:
        | {
            Args: {
              blocksize_x?: boolean
              blocksize_y?: boolean
              extent?: boolean
              nodata_values?: boolean
              num_bands?: boolean
              out_db?: boolean
              pixel_types?: boolean
              rastcolumn: unknown
              rastschema: unknown
              rasttable: unknown
              regular_blocking?: boolean
              same_alignment?: boolean
              scale_x?: boolean
              scale_y?: boolean
              srid?: boolean
            }
            Returns: boolean
          }
        | {
            Args: {
              constraints: string[]
              rastcolumn: unknown
              rastschema: unknown
              rasttable: unknown
            }
            Returns: boolean
          }
        | {
            Args: {
              blocksize_x?: boolean
              blocksize_y?: boolean
              extent?: boolean
              nodata_values?: boolean
              num_bands?: boolean
              out_db?: boolean
              pixel_types?: boolean
              rastcolumn: unknown
              rasttable: unknown
              regular_blocking?: boolean
              same_alignment?: boolean
              scale_x?: boolean
              scale_y?: boolean
              srid?: boolean
            }
            Returns: boolean
          }
        | {
            Args: {
              constraints: string[]
              rastcolumn: unknown
              rasttable: unknown
            }
            Returns: boolean
          }
      enablelongtransactions: { Args: never; Returns: string }
      equals: { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      geometry: { Args: { "": string }; Returns: unknown }
      geometry_above: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_below: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_cmp: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      geometry_contained_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_contains: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_contains_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_distance_box: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      geometry_distance_centroid: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      geometry_eq: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_ge: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_gt: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_le: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_left: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_lt: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overabove: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overbelow: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overlaps: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overlaps_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overleft: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_overright: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_right: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_same: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_same_3d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geometry_within: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      geomfromewkt: { Args: { "": string }; Returns: unknown }
      gettransactionid: { Args: never; Returns: unknown }
      http: {
        Args: { request: Database["public"]["CompositeTypes"]["http_request"] }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
        SetofOptions: {
          from: "http_request"
          to: "http_response"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      http_delete:
        | {
            Args: { uri: string }
            Returns: Database["public"]["CompositeTypes"]["http_response"]
            SetofOptions: {
              from: "*"
              to: "http_response"
              isOneToOne: true
              isSetofReturn: false
            }
          }
        | {
            Args: { content: string; content_type: string; uri: string }
            Returns: Database["public"]["CompositeTypes"]["http_response"]
            SetofOptions: {
              from: "*"
              to: "http_response"
              isOneToOne: true
              isSetofReturn: false
            }
          }
      http_get:
        | {
            Args: { uri: string }
            Returns: Database["public"]["CompositeTypes"]["http_response"]
            SetofOptions: {
              from: "*"
              to: "http_response"
              isOneToOne: true
              isSetofReturn: false
            }
          }
        | {
            Args: { data: Json; uri: string }
            Returns: Database["public"]["CompositeTypes"]["http_response"]
            SetofOptions: {
              from: "*"
              to: "http_response"
              isOneToOne: true
              isSetofReturn: false
            }
          }
      http_head: {
        Args: { uri: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
        SetofOptions: {
          from: "*"
          to: "http_response"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      http_header: {
        Args: { field: string; value: string }
        Returns: Database["public"]["CompositeTypes"]["http_header"]
        SetofOptions: {
          from: "*"
          to: "http_header"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      http_list_curlopt: {
        Args: never
        Returns: {
          curlopt: string
          value: string
        }[]
      }
      http_patch: {
        Args: { content: string; content_type: string; uri: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
        SetofOptions: {
          from: "*"
          to: "http_response"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      http_post:
        | {
            Args: { content: string; content_type: string; uri: string }
            Returns: Database["public"]["CompositeTypes"]["http_response"]
            SetofOptions: {
              from: "*"
              to: "http_response"
              isOneToOne: true
              isSetofReturn: false
            }
          }
        | {
            Args: { data: Json; uri: string }
            Returns: Database["public"]["CompositeTypes"]["http_response"]
            SetofOptions: {
              from: "*"
              to: "http_response"
              isOneToOne: true
              isSetofReturn: false
            }
          }
      http_put: {
        Args: { content: string; content_type: string; uri: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
        SetofOptions: {
          from: "*"
          to: "http_response"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      http_reset_curlopt: { Args: never; Returns: boolean }
      http_set_curlopt: {
        Args: { curlopt: string; value: string }
        Returns: boolean
      }
      json_matches_schema: {
        Args: { instance: Json; schema: Json }
        Returns: boolean
      }
      jsonb_matches_schema: {
        Args: { instance: Json; schema: Json }
        Returns: boolean
      }
      jsonschema_is_valid: { Args: { schema: Json }; Returns: boolean }
      jsonschema_validation_errors: {
        Args: { instance: Json; schema: Json }
        Returns: string[]
      }
      longtransactionsenabled: { Args: never; Returns: boolean }
      pgr_articulationpoints: { Args: { "": string }; Returns: number[] }
      pgr_biconnectedcomponents: {
        Args: { "": string }
        Returns: Record<string, unknown>[]
      }
      pgr_bipartite: {
        Args: { "": string }
        Returns: Record<string, unknown>[]
      }
      pgr_bridges: { Args: { "": string }; Returns: number[] }
      pgr_chinesepostman: {
        Args: { "": string }
        Returns: Record<string, unknown>[]
      }
      pgr_chinesepostmancost: { Args: { "": string }; Returns: number }
      pgr_connectedcomponents: {
        Args: { "": string }
        Returns: Record<string, unknown>[]
      }
      pgr_cuthillmckeeordering: {
        Args: { "": string }
        Returns: Record<string, unknown>[]
      }
      pgr_edgecoloring: {
        Args: { "": string }
        Returns: Record<string, unknown>[]
      }
      pgr_full_version: { Args: never; Returns: Record<string, unknown> }
      pgr_hawickcircuits: {
        Args: { "": string }
        Returns: Record<string, unknown>[]
      }
      pgr_isplanar: { Args: { "": string }; Returns: boolean }
      pgr_kruskal: { Args: { "": string }; Returns: Record<string, unknown>[] }
      pgr_linegraphfull: {
        Args: { "": string }
        Returns: Record<string, unknown>[]
      }
      pgr_makeconnected: {
        Args: { "": string }
        Returns: Record<string, unknown>[]
      }
      pgr_maxcardinalitymatch: { Args: { "": string }; Returns: number[] }
      pgr_prim: { Args: { "": string }; Returns: Record<string, unknown>[] }
      pgr_sequentialvertexcoloring: {
        Args: { "": string }
        Returns: Record<string, unknown>[]
      }
      pgr_stoerwagner: {
        Args: { "": string }
        Returns: Record<string, unknown>[]
      }
      pgr_strongcomponents: {
        Args: { "": string }
        Returns: Record<string, unknown>[]
      }
      pgr_topologicalsort: {
        Args: { "": string }
        Returns: Record<string, unknown>[]
      }
      pgr_transitiveclosure: {
        Args: { "": string }
        Returns: Record<string, unknown>[]
      }
      pgr_version: { Args: never; Returns: string }
      populate_geometry_columns:
        | { Args: { tbl_oid: unknown; use_typmod?: boolean }; Returns: number }
        | { Args: { use_typmod?: boolean }; Returns: string }
      postgis_constraint_dims: {
        Args: { geomcolumn: string; geomschema: string; geomtable: string }
        Returns: number
      }
      postgis_constraint_srid: {
        Args: { geomcolumn: string; geomschema: string; geomtable: string }
        Returns: number
      }
      postgis_constraint_type: {
        Args: { geomcolumn: string; geomschema: string; geomtable: string }
        Returns: string
      }
      postgis_extensions_upgrade: { Args: never; Returns: string }
      postgis_full_version: { Args: never; Returns: string }
      postgis_gdal_version: { Args: never; Returns: string }
      postgis_geos_version: { Args: never; Returns: string }
      postgis_lib_build_date: { Args: never; Returns: string }
      postgis_lib_revision: { Args: never; Returns: string }
      postgis_lib_version: { Args: never; Returns: string }
      postgis_libjson_version: { Args: never; Returns: string }
      postgis_liblwgeom_version: { Args: never; Returns: string }
      postgis_libprotobuf_version: { Args: never; Returns: string }
      postgis_libxml_version: { Args: never; Returns: string }
      postgis_proj_version: { Args: never; Returns: string }
      postgis_raster_lib_build_date: { Args: never; Returns: string }
      postgis_raster_lib_version: { Args: never; Returns: string }
      postgis_raster_scripts_installed: { Args: never; Returns: string }
      postgis_scripts_build_date: { Args: never; Returns: string }
      postgis_scripts_installed: { Args: never; Returns: string }
      postgis_scripts_released: { Args: never; Returns: string }
      postgis_svn_version: { Args: never; Returns: string }
      postgis_type_name: {
        Args: {
          coord_dimension: number
          geomname: string
          use_new_name?: boolean
        }
        Returns: string
      }
      postgis_version: { Args: never; Returns: string }
      postgis_wagyu_version: { Args: never; Returns: string }
      st_3dclosestpoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_3ddistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_3dintersects: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_3dlongestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_3dmakebox: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_3dmaxdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_3dshortestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_addband:
        | {
            Args: {
              addbandargset: Database["public"]["CompositeTypes"]["addbandarg"][]
              rast: unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              index: number
              nodataval?: number
              outdbfile: string
              outdbindex: number[]
              rast: unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              index: number
              initialvalue?: number
              nodataval?: number
              pixeltype: string
              rast: unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              index?: number
              nodataval?: number
              outdbfile: string
              outdbindex: number[]
              rast: unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              initialvalue?: number
              nodataval?: number
              pixeltype: string
              rast: unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              fromband?: number
              fromrast: unknown
              torast: unknown
              torastindex?: number
            }
            Returns: unknown
          }
        | {
            Args: {
              fromband?: number
              fromrasts: unknown[]
              torast: unknown
              torastindex?: number
            }
            Returns: unknown
          }
      st_addpoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_angle:
        | { Args: { line1: unknown; line2: unknown }; Returns: number }
        | {
            Args: { pt1: unknown; pt2: unknown; pt3: unknown; pt4?: unknown }
            Returns: number
          }
      st_approxcount:
        | {
            Args: {
              exclude_nodata_value: boolean
              rast: unknown
              sample_percent?: number
            }
            Returns: number
          }
        | {
            Args: {
              exclude_nodata_value?: boolean
              nband?: number
              rast: unknown
              sample_percent?: number
            }
            Returns: number
          }
        | {
            Args: { nband: number; rast: unknown; sample_percent: number }
            Returns: number
          }
        | { Args: { rast: unknown; sample_percent: number }; Returns: number }
      st_approxhistogram:
        | {
            Args: {
              bins?: number
              exclude_nodata_value?: boolean
              nband?: number
              rast: unknown
              right?: boolean
              sample_percent?: number
              width?: number[]
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              bins: number
              exclude_nodata_value: boolean
              nband: number
              rast: unknown
              right: boolean
              sample_percent: number
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              bins: number
              nband: number
              rast: unknown
              right: boolean
              sample_percent: number
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              bins: number
              nband: number
              rast: unknown
              right?: boolean
              sample_percent: number
              width?: number[]
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: { nband: number; rast: unknown; sample_percent: number }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: { rast: unknown; sample_percent: number }
            Returns: Record<string, unknown>[]
          }
      st_approxquantile:
        | {
            Args: {
              exclude_nodata_value: boolean
              quantile?: number
              rast: unknown
            }
            Returns: number
          }
        | {
            Args: {
              exclude_nodata_value?: boolean
              nband?: number
              quantiles?: number[]
              rast: unknown
              sample_percent?: number
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              exclude_nodata_value: boolean
              nband: number
              quantile: number
              rast: unknown
              sample_percent: number
            }
            Returns: number
          }
        | {
            Args: {
              nband: number
              quantile: number
              rast: unknown
              sample_percent: number
            }
            Returns: number
          }
        | {
            Args: {
              nband: number
              quantiles?: number[]
              rast: unknown
              sample_percent: number
            }
            Returns: Record<string, unknown>[]
          }
        | { Args: { quantile: number; rast: unknown }; Returns: number }
        | {
            Args: { quantiles: number[]; rast: unknown }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: { quantile: number; rast: unknown; sample_percent: number }
            Returns: number
          }
        | {
            Args: {
              quantiles?: number[]
              rast: unknown
              sample_percent: number
            }
            Returns: Record<string, unknown>[]
          }
      st_approxsummarystats:
        | {
            Args: {
              exclude_nodata_value: boolean
              rast: unknown
              sample_percent?: number
            }
            Returns: Database["public"]["CompositeTypes"]["summarystats"]
            SetofOptions: {
              from: "*"
              to: "summarystats"
              isOneToOne: true
              isSetofReturn: false
            }
          }
        | {
            Args: {
              exclude_nodata_value?: boolean
              nband?: number
              rast: unknown
              sample_percent?: number
            }
            Returns: Database["public"]["CompositeTypes"]["summarystats"]
            SetofOptions: {
              from: "*"
              to: "summarystats"
              isOneToOne: true
              isSetofReturn: false
            }
          }
        | {
            Args: { nband: number; rast: unknown; sample_percent: number }
            Returns: Database["public"]["CompositeTypes"]["summarystats"]
            SetofOptions: {
              from: "*"
              to: "summarystats"
              isOneToOne: true
              isSetofReturn: false
            }
          }
        | {
            Args: { rast: unknown; sample_percent: number }
            Returns: Database["public"]["CompositeTypes"]["summarystats"]
            SetofOptions: {
              from: "*"
              to: "summarystats"
              isOneToOne: true
              isSetofReturn: false
            }
          }
      st_area:
        | { Args: { geog: unknown; use_spheroid?: boolean }; Returns: number }
        | { Args: { "": string }; Returns: number }
      st_asencodedpolyline: {
        Args: { geom: unknown; nprecision?: number }
        Returns: string
      }
      st_asewkt: { Args: { "": string }; Returns: string }
      st_asgdalraster: {
        Args: {
          format: string
          options?: string[]
          rast: unknown
          srid?: number
        }
        Returns: string
      }
      st_asgeojson:
        | {
            Args: { geog: unknown; maxdecimaldigits?: number; options?: number }
            Returns: string
          }
        | {
            Args: { geom: unknown; maxdecimaldigits?: number; options?: number }
            Returns: string
          }
        | {
            Args: {
              geom_column?: string
              maxdecimaldigits?: number
              pretty_bool?: boolean
              r: Record<string, unknown>
            }
            Returns: string
          }
        | { Args: { "": string }; Returns: string }
      st_asgml:
        | {
            Args: {
              geog: unknown
              id?: string
              maxdecimaldigits?: number
              nprefix?: string
              options?: number
            }
            Returns: string
          }
        | {
            Args: { geom: unknown; maxdecimaldigits?: number; options?: number }
            Returns: string
          }
        | { Args: { "": string }; Returns: string }
        | {
            Args: {
              geog: unknown
              id?: string
              maxdecimaldigits?: number
              nprefix?: string
              options?: number
              version: number
            }
            Returns: string
          }
        | {
            Args: {
              geom: unknown
              id?: string
              maxdecimaldigits?: number
              nprefix?: string
              options?: number
              version: number
            }
            Returns: string
          }
      st_asjpeg:
        | {
            Args: { nband: number; options?: string[]; rast: unknown }
            Returns: string
          }
        | {
            Args: { nband: number; quality: number; rast: unknown }
            Returns: string
          }
        | {
            Args: { nbands: number[]; options?: string[]; rast: unknown }
            Returns: string
          }
        | {
            Args: { nbands: number[]; quality: number; rast: unknown }
            Returns: string
          }
        | { Args: { options?: string[]; rast: unknown }; Returns: string }
      st_askml:
        | {
            Args: { geog: unknown; maxdecimaldigits?: number; nprefix?: string }
            Returns: string
          }
        | {
            Args: { geom: unknown; maxdecimaldigits?: number; nprefix?: string }
            Returns: string
          }
        | { Args: { "": string }; Returns: string }
      st_aslatlontext: {
        Args: { geom: unknown; tmpl?: string }
        Returns: string
      }
      st_asmarc21: { Args: { format?: string; geom: unknown }; Returns: string }
      st_asmvtgeom: {
        Args: {
          bounds: unknown
          buffer?: number
          clip_geom?: boolean
          extent?: number
          geom: unknown
        }
        Returns: unknown
      }
      st_aspect:
        | {
            Args: {
              interpolate_nodata?: boolean
              nband?: number
              pixeltype?: string
              rast: unknown
              units?: string
            }
            Returns: unknown
          }
        | {
            Args: {
              customextent: unknown
              interpolate_nodata?: boolean
              nband: number
              pixeltype?: string
              rast: unknown
              units?: string
            }
            Returns: unknown
          }
      st_aspng:
        | {
            Args: { compression: number; nband: number; rast: unknown }
            Returns: string
          }
        | {
            Args: { nband: number; options?: string[]; rast: unknown }
            Returns: string
          }
        | {
            Args: { compression: number; nbands: number[]; rast: unknown }
            Returns: string
          }
        | {
            Args: { nbands: number[]; options?: string[]; rast: unknown }
            Returns: string
          }
        | { Args: { options?: string[]; rast: unknown }; Returns: string }
      st_asraster:
        | {
            Args: {
              geom: unknown
              nodataval?: number
              pixeltype: string
              ref: unknown
              touched?: boolean
              value?: number
            }
            Returns: unknown
          }
        | {
            Args: {
              geom: unknown
              nodataval?: number[]
              pixeltype?: string[]
              ref: unknown
              touched?: boolean
              value?: number[]
            }
            Returns: unknown
          }
        | {
            Args: {
              geom: unknown
              gridx?: number
              gridy?: number
              nodataval?: number[]
              pixeltype?: string[]
              scalex: number
              scaley: number
              skewx?: number
              skewy?: number
              touched?: boolean
              value?: number[]
            }
            Returns: unknown
          }
        | {
            Args: {
              geom: unknown
              gridx: number
              gridy: number
              nodataval?: number
              pixeltype: string
              scalex: number
              scaley: number
              skewx?: number
              skewy?: number
              touched?: boolean
              value?: number
            }
            Returns: unknown
          }
        | {
            Args: {
              geom: unknown
              nodataval?: number
              pixeltype: string
              scalex: number
              scaley: number
              skewx?: number
              skewy?: number
              touched?: boolean
              upperleftx?: number
              upperlefty?: number
              value?: number
            }
            Returns: unknown
          }
        | {
            Args: {
              geom: unknown
              nodataval?: number[]
              pixeltype: string[]
              scalex: number
              scaley: number
              skewx?: number
              skewy?: number
              touched?: boolean
              upperleftx?: number
              upperlefty?: number
              value?: number[]
            }
            Returns: unknown
          }
        | {
            Args: {
              geom: unknown
              gridx?: number
              gridy?: number
              height: number
              nodataval?: number[]
              pixeltype?: string[]
              skewx?: number
              skewy?: number
              touched?: boolean
              value?: number[]
              width: number
            }
            Returns: unknown
          }
        | {
            Args: {
              geom: unknown
              gridx: number
              gridy: number
              height: number
              nodataval?: number
              pixeltype: string
              skewx?: number
              skewy?: number
              touched?: boolean
              value?: number
              width: number
            }
            Returns: unknown
          }
        | {
            Args: {
              geom: unknown
              height: number
              nodataval?: number
              pixeltype: string
              skewx?: number
              skewy?: number
              touched?: boolean
              upperleftx?: number
              upperlefty?: number
              value?: number
              width: number
            }
            Returns: unknown
          }
        | {
            Args: {
              geom: unknown
              height: number
              nodataval?: number[]
              pixeltype: string[]
              skewx?: number
              skewy?: number
              touched?: boolean
              upperleftx?: number
              upperlefty?: number
              value?: number[]
              width: number
            }
            Returns: unknown
          }
      st_assvg:
        | {
            Args: { geog: unknown; maxdecimaldigits?: number; rel?: number }
            Returns: string
          }
        | {
            Args: { geom: unknown; maxdecimaldigits?: number; rel?: number }
            Returns: string
          }
        | { Args: { "": string }; Returns: string }
      st_astext: { Args: { "": string }; Returns: string }
      st_astiff:
        | {
            Args: { compression: string; rast: unknown; srid?: number }
            Returns: string
          }
        | {
            Args: {
              compression: string
              nbands: number[]
              rast: unknown
              srid?: number
            }
            Returns: string
          }
        | {
            Args: {
              nbands: number[]
              options?: string[]
              rast: unknown
              srid?: number
            }
            Returns: string
          }
        | {
            Args: { options?: string[]; rast: unknown; srid?: number }
            Returns: string
          }
      st_astwkb:
        | {
            Args: {
              geom: unknown
              prec?: number
              prec_m?: number
              prec_z?: number
              with_boxes?: boolean
              with_sizes?: boolean
            }
            Returns: string
          }
        | {
            Args: {
              geom: unknown[]
              ids: number[]
              prec?: number
              prec_m?: number
              prec_z?: number
              with_boxes?: boolean
              with_sizes?: boolean
            }
            Returns: string
          }
      st_asx3d: {
        Args: { geom: unknown; maxdecimaldigits?: number; options?: number }
        Returns: string
      }
      st_azimuth:
        | { Args: { geog1: unknown; geog2: unknown }; Returns: number }
        | { Args: { geom1: unknown; geom2: unknown }; Returns: number }
      st_band:
        | { Args: { nband: number; rast: unknown }; Returns: unknown }
        | { Args: { nbands?: number[]; rast: unknown }; Returns: unknown }
        | {
            Args: { delimiter?: string; nbands: string; rast: unknown }
            Returns: unknown
          }
      st_bandfilesize: {
        Args: { band?: number; rast: unknown }
        Returns: number
      }
      st_bandfiletimestamp: {
        Args: { band?: number; rast: unknown }
        Returns: number
      }
      st_bandisnodata:
        | {
            Args: { band?: number; forcechecking?: boolean; rast: unknown }
            Returns: boolean
          }
        | { Args: { forcechecking: boolean; rast: unknown }; Returns: boolean }
      st_bandmetadata:
        | {
            Args: { band?: number; rast: unknown }
            Returns: {
              filesize: number
              filetimestamp: number
              isoutdb: boolean
              nodatavalue: number
              outdbbandnum: number
              path: string
              pixeltype: string
            }[]
          }
        | {
            Args: { band: number[]; rast: unknown }
            Returns: {
              bandnum: number
              filesize: number
              filetimestamp: number
              isoutdb: boolean
              nodatavalue: number
              outdbbandnum: number
              path: string
              pixeltype: string
            }[]
          }
      st_bandnodatavalue: {
        Args: { band?: number; rast: unknown }
        Returns: number
      }
      st_bandpath: { Args: { band?: number; rast: unknown }; Returns: string }
      st_bandpixeltype: {
        Args: { band?: number; rast: unknown }
        Returns: string
      }
      st_boundingdiagonal: {
        Args: { fits?: boolean; geom: unknown }
        Returns: unknown
      }
      st_buffer:
        | {
            Args: { geom: unknown; options?: string; radius: number }
            Returns: unknown
          }
        | {
            Args: { geom: unknown; quadsegs: number; radius: number }
            Returns: unknown
          }
      st_centroid: { Args: { "": string }; Returns: unknown }
      st_clip:
        | {
            Args: { crop: boolean; geom: unknown; rast: unknown }
            Returns: unknown
          }
        | {
            Args: {
              crop?: boolean
              geom: unknown
              nodataval: number
              rast: unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              crop?: boolean
              geom: unknown
              nodataval?: number[]
              rast: unknown
            }
            Returns: unknown
          }
        | {
            Args: { crop: boolean; geom: unknown; nband: number; rast: unknown }
            Returns: unknown
          }
        | {
            Args: {
              crop?: boolean
              geom: unknown
              nband: number
              nodataval: number
              rast: unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              crop?: boolean
              geom: unknown
              nband: number[]
              nodataval?: number[]
              rast: unknown
            }
            Returns: unknown
          }
      st_clipbybox2d: {
        Args: { box: unknown; geom: unknown }
        Returns: unknown
      }
      st_closestpoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_collect: { Args: { geom1: unknown; geom2: unknown }; Returns: unknown }
      st_colormap:
        | {
            Args: { colormap: string; method?: string; rast: unknown }
            Returns: unknown
          }
        | {
            Args: {
              colormap?: string
              method?: string
              nband?: number
              rast: unknown
            }
            Returns: unknown
          }
      st_concavehull: {
        Args: {
          param_allow_holes?: boolean
          param_geom: unknown
          param_pctconvex: number
        }
        Returns: unknown
      }
      st_contains:
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
        | {
            Args: {
              nband1: number
              nband2: number
              rast1: unknown
              rast2: unknown
            }
            Returns: boolean
          }
        | { Args: { rast1: unknown; rast2: unknown }; Returns: boolean }
      st_containsproperly:
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
        | {
            Args: {
              nband1: number
              nband2: number
              rast1: unknown
              rast2: unknown
            }
            Returns: boolean
          }
        | { Args: { rast1: unknown; rast2: unknown }; Returns: boolean }
      st_contour: {
        Args: {
          bandnumber?: number
          fixed_levels?: number[]
          level_base?: number
          level_interval?: number
          polygonize?: boolean
          rast: unknown
        }
        Returns: {
          geom: unknown
          id: number
          value: number
        }[]
      }
      st_coorddim: { Args: { geometry: unknown }; Returns: number }
      st_count:
        | {
            Args: { exclude_nodata_value: boolean; rast: unknown }
            Returns: number
          }
        | {
            Args: {
              exclude_nodata_value?: boolean
              nband?: number
              rast: unknown
            }
            Returns: number
          }
      st_coveredby:
        | { Args: { geog1: unknown; geog2: unknown }; Returns: boolean }
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
        | {
            Args: {
              nband1: number
              nband2: number
              rast1: unknown
              rast2: unknown
            }
            Returns: boolean
          }
        | { Args: { rast1: unknown; rast2: unknown }; Returns: boolean }
      st_covers:
        | { Args: { geog1: unknown; geog2: unknown }; Returns: boolean }
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
        | {
            Args: {
              nband1: number
              nband2: number
              rast1: unknown
              rast2: unknown
            }
            Returns: boolean
          }
        | { Args: { rast1: unknown; rast2: unknown }; Returns: boolean }
      st_createoverview: {
        Args: { algo?: string; col: unknown; factor: number; tab: unknown }
        Returns: unknown
      }
      st_crosses: { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      st_curvetoline: {
        Args: { flags?: number; geom: unknown; tol?: number; toltype?: number }
        Returns: unknown
      }
      st_delaunaytriangles: {
        Args: { flags?: number; g1: unknown; tolerance?: number }
        Returns: unknown
      }
      st_dfullywithin:
        | {
            Args: {
              distance: number
              nband1: number
              nband2: number
              rast1: unknown
              rast2: unknown
            }
            Returns: boolean
          }
        | {
            Args: { distance: number; rast1: unknown; rast2: unknown }
            Returns: boolean
          }
      st_difference: {
        Args: { geom1: unknown; geom2: unknown; gridsize?: number }
        Returns: unknown
      }
      st_disjoint:
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
        | {
            Args: {
              nband1: number
              nband2: number
              rast1: unknown
              rast2: unknown
            }
            Returns: boolean
          }
        | { Args: { rast1: unknown; rast2: unknown }; Returns: boolean }
      st_distance:
        | {
            Args: { geog1: unknown; geog2: unknown; use_spheroid?: boolean }
            Returns: number
          }
        | { Args: { geom1: unknown; geom2: unknown }; Returns: number }
      st_distancesphere:
        | { Args: { geom1: unknown; geom2: unknown }; Returns: number }
        | {
            Args: { geom1: unknown; geom2: unknown; radius: number }
            Returns: number
          }
      st_distancespheroid: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_distinct4ma:
        | {
            Args: { args: string[]; matrix: number[]; nodatamode: string }
            Returns: number
          }
        | {
            Args: { pos: number[]; userargs?: string[]; value: number[] }
            Returns: number
          }
      st_dumpaspolygons: {
        Args: { band?: number; exclude_nodata_value?: boolean; rast: unknown }
        Returns: Database["public"]["CompositeTypes"]["geomval"][]
        SetofOptions: {
          from: "*"
          to: "geomval"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      st_dumpvalues:
        | {
            Args: {
              exclude_nodata_value?: boolean
              nband: number
              rast: unknown
            }
            Returns: number[]
          }
        | {
            Args: {
              exclude_nodata_value?: boolean
              nband?: number[]
              rast: unknown
            }
            Returns: {
              nband: number
              valarray: number[]
            }[]
          }
      st_dwithin:
        | {
            Args: {
              geog1: unknown
              geog2: unknown
              tolerance: number
              use_spheroid?: boolean
            }
            Returns: boolean
          }
        | {
            Args: {
              distance: number
              nband1: number
              nband2: number
              rast1: unknown
              rast2: unknown
            }
            Returns: boolean
          }
        | {
            Args: { distance: number; rast1: unknown; rast2: unknown }
            Returns: boolean
          }
      st_equals: { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
      st_expand:
        | { Args: { box: unknown; dx: number; dy: number }; Returns: unknown }
        | {
            Args: { box: unknown; dx: number; dy: number; dz?: number }
            Returns: unknown
          }
        | {
            Args: {
              dm?: number
              dx: number
              dy: number
              dz?: number
              geom: unknown
            }
            Returns: unknown
          }
      st_force3d: { Args: { geom: unknown; zvalue?: number }; Returns: unknown }
      st_force3dm: {
        Args: { geom: unknown; mvalue?: number }
        Returns: unknown
      }
      st_force3dz: {
        Args: { geom: unknown; zvalue?: number }
        Returns: unknown
      }
      st_force4d: {
        Args: { geom: unknown; mvalue?: number; zvalue?: number }
        Returns: unknown
      }
      st_fromgdalraster: {
        Args: { gdaldata: string; srid?: number }
        Returns: unknown
      }
      st_gdaldrivers: { Args: never; Returns: Record<string, unknown>[] }
      st_generatepoints:
        | { Args: { area: unknown; npoints: number }; Returns: unknown }
        | {
            Args: { area: unknown; npoints: number; seed: number }
            Returns: unknown
          }
      st_geogfromtext: { Args: { "": string }; Returns: unknown }
      st_geographyfromtext: { Args: { "": string }; Returns: unknown }
      st_geohash:
        | { Args: { geog: unknown; maxchars?: number }; Returns: string }
        | { Args: { geom: unknown; maxchars?: number }; Returns: string }
      st_geomcollfromtext: { Args: { "": string }; Returns: unknown }
      st_geometricmedian: {
        Args: {
          fail_if_not_converged?: boolean
          g: unknown
          max_iter?: number
          tolerance?: number
        }
        Returns: unknown
      }
      st_geometryfromtext: { Args: { "": string }; Returns: unknown }
      st_geomfromewkt: { Args: { "": string }; Returns: unknown }
      st_geomfromgeojson:
        | { Args: { "": Json }; Returns: unknown }
        | { Args: { "": Json }; Returns: unknown }
        | { Args: { "": string }; Returns: unknown }
      st_geomfromgml: { Args: { "": string }; Returns: unknown }
      st_geomfromkml: { Args: { "": string }; Returns: unknown }
      st_geomfrommarc21: { Args: { marc21xml: string }; Returns: unknown }
      st_geomfromtext: { Args: { "": string }; Returns: unknown }
      st_georeference: {
        Args: { format?: string; rast: unknown }
        Returns: string
      }
      st_gmltosql: { Args: { "": string }; Returns: unknown }
      st_grayscale:
        | {
            Args: {
              blueband?: number
              extenttype?: string
              greenband?: number
              rast: unknown
              redband?: number
            }
            Returns: unknown
          }
        | {
            Args: {
              extenttype?: string
              rastbandargset: Database["public"]["CompositeTypes"]["rastbandarg"][]
            }
            Returns: unknown
          }
      st_hasarc: { Args: { geometry: unknown }; Returns: boolean }
      st_hasnoband: {
        Args: { nband?: number; rast: unknown }
        Returns: boolean
      }
      st_hausdorffdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_hexagon: {
        Args: { cell_i: number; cell_j: number; origin?: unknown; size: number }
        Returns: unknown
      }
      st_hexagongrid: {
        Args: { bounds: unknown; size: number }
        Returns: Record<string, unknown>[]
      }
      st_hillshade:
        | {
            Args: {
              altitude?: number
              azimuth?: number
              interpolate_nodata?: boolean
              max_bright?: number
              nband?: number
              pixeltype?: string
              rast: unknown
              scale?: number
            }
            Returns: unknown
          }
        | {
            Args: {
              altitude?: number
              azimuth?: number
              customextent: unknown
              interpolate_nodata?: boolean
              max_bright?: number
              nband: number
              pixeltype?: string
              rast: unknown
              scale?: number
            }
            Returns: unknown
          }
      st_histogram:
        | {
            Args: {
              bins?: number
              exclude_nodata_value?: boolean
              nband?: number
              rast: unknown
              right?: boolean
              width?: number[]
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: { bins: number; nband: number; rast: unknown; right: boolean }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              bins: number
              nband: number
              rast: unknown
              right?: boolean
              width?: number[]
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              bins: number
              exclude_nodata_value: boolean
              nband: number
              rast: unknown
              right: boolean
            }
            Returns: Record<string, unknown>[]
          }
      st_interpolatepoint: {
        Args: { line: unknown; point: unknown }
        Returns: number
      }
      st_interpolateraster: {
        Args: {
          bandnumber?: number
          geom: unknown
          options: string
          rast: unknown
        }
        Returns: unknown
      }
      st_intersection:
        | {
            Args: { geom1: unknown; geom2: unknown; gridsize?: number }
            Returns: unknown
          }
        | {
            Args: { band?: number; geomin: unknown; rast: unknown }
            Returns: Database["public"]["CompositeTypes"]["geomval"][]
            SetofOptions: {
              from: "*"
              to: "geomval"
              isOneToOne: false
              isSetofReturn: true
            }
          }
        | {
            Args: { band: number; geomin: unknown; rast: unknown }
            Returns: Database["public"]["CompositeTypes"]["geomval"][]
            SetofOptions: {
              from: "*"
              to: "geomval"
              isOneToOne: false
              isSetofReturn: true
            }
          }
        | {
            Args: { geomin: unknown; rast: unknown }
            Returns: Database["public"]["CompositeTypes"]["geomval"][]
            SetofOptions: {
              from: "*"
              to: "geomval"
              isOneToOne: false
              isSetofReturn: true
            }
          }
        | {
            Args: {
              band1: number
              band2: number
              nodataval: number
              rast1: unknown
              rast2: unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              band1: number
              band2: number
              nodataval: number[]
              rast1: unknown
              rast2: unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              band1: number
              band2: number
              nodataval?: number[]
              rast1: unknown
              rast2: unknown
              returnband?: string
            }
            Returns: unknown
          }
        | {
            Args: {
              band1: number
              band2: number
              nodataval: number
              rast1: unknown
              rast2: unknown
              returnband: string
            }
            Returns: unknown
          }
        | {
            Args: { nodataval: number; rast1: unknown; rast2: unknown }
            Returns: unknown
          }
        | {
            Args: { nodataval: number[]; rast1: unknown; rast2: unknown }
            Returns: unknown
          }
        | {
            Args: {
              nodataval?: number[]
              rast1: unknown
              rast2: unknown
              returnband?: string
            }
            Returns: unknown
          }
        | {
            Args: {
              nodataval: number
              rast1: unknown
              rast2: unknown
              returnband: string
            }
            Returns: unknown
          }
      st_intersects:
        | { Args: { geog1: unknown; geog2: unknown }; Returns: boolean }
        | {
            Args: { geom: unknown; nband?: number; rast: unknown }
            Returns: boolean
          }
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
        | {
            Args: { geom: unknown; nband?: number; rast: unknown }
            Returns: boolean
          }
        | {
            Args: { geom: unknown; nband: number; rast: unknown }
            Returns: boolean
          }
        | {
            Args: {
              nband1: number
              nband2: number
              rast1: unknown
              rast2: unknown
            }
            Returns: boolean
          }
        | { Args: { rast1: unknown; rast2: unknown }; Returns: boolean }
      st_invdistweight4ma: {
        Args: { pos: number[]; userargs?: string[]; value: number[] }
        Returns: number
      }
      st_iscoveragetile: {
        Args: {
          coverage: unknown
          rast: unknown
          tileheight: number
          tilewidth: number
        }
        Returns: boolean
      }
      st_isempty: { Args: { rast: unknown }; Returns: boolean }
      st_isvaliddetail: {
        Args: { flags?: number; geom: unknown }
        Returns: Database["public"]["CompositeTypes"]["valid_detail"]
        SetofOptions: {
          from: "*"
          to: "valid_detail"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      st_length:
        | { Args: { geog: unknown; use_spheroid?: boolean }; Returns: number }
        | { Args: { "": string }; Returns: number }
      st_letters: { Args: { font?: Json; letters: string }; Returns: unknown }
      st_linecrossingdirection: {
        Args: { line1: unknown; line2: unknown }
        Returns: number
      }
      st_linefromencodedpolyline: {
        Args: { nprecision?: number; txtin: string }
        Returns: unknown
      }
      st_linefromtext: { Args: { "": string }; Returns: unknown }
      st_linelocatepoint: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_linetocurve: { Args: { geometry: unknown }; Returns: unknown }
      st_locatealong: {
        Args: { geometry: unknown; leftrightoffset?: number; measure: number }
        Returns: unknown
      }
      st_locatebetween: {
        Args: {
          frommeasure: number
          geometry: unknown
          leftrightoffset?: number
          tomeasure: number
        }
        Returns: unknown
      }
      st_locatebetweenelevations: {
        Args: { fromelevation: number; geometry: unknown; toelevation: number }
        Returns: unknown
      }
      st_longestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_makebox2d: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_makeemptycoverage: {
        Args: {
          height: number
          scalex: number
          scaley: number
          skewx: number
          skewy: number
          srid?: number
          tileheight: number
          tilewidth: number
          upperleftx: number
          upperlefty: number
          width: number
        }
        Returns: unknown[]
      }
      st_makeemptyraster:
        | { Args: { rast: unknown }; Returns: unknown }
        | {
            Args: {
              height: number
              pixelsize: number
              upperleftx: number
              upperlefty: number
              width: number
            }
            Returns: unknown
          }
        | {
            Args: {
              height: number
              scalex: number
              scaley: number
              skewx: number
              skewy: number
              srid?: number
              upperleftx: number
              upperlefty: number
              width: number
            }
            Returns: unknown
          }
      st_makeline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_makevalid: {
        Args: { geom: unknown; params: string }
        Returns: unknown
      }
      st_mapalgebra:
        | {
            Args: {
              callbackfunc: unknown
              customextent?: unknown
              extenttype?: string
              mask: number[]
              nband: number
              pixeltype?: string
              rast: unknown
              userargs?: string[]
              weighted: boolean
            }
            Returns: unknown
          }
        | {
            Args: {
              callbackfunc: unknown
              customextent?: unknown
              distancex?: number
              distancey?: number
              extenttype?: string
              nband: number
              pixeltype?: string
              rast: unknown
              userargs?: string[]
            }
            Returns: unknown
          }
        | {
            Args: {
              expression: string
              nband: number
              nodataval?: number
              pixeltype: string
              rast: unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              callbackfunc: unknown
              customextent?: unknown
              distancex?: number
              distancey?: number
              extenttype?: string
              nband: number[]
              pixeltype?: string
              rast: unknown
              userargs?: string[]
            }
            Returns: unknown
          }
        | {
            Args: {
              expression: string
              nodataval?: number
              pixeltype: string
              rast: unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              band1: number
              band2: number
              expression: string
              extenttype?: string
              nodata1expr?: string
              nodata2expr?: string
              nodatanodataval?: number
              pixeltype?: string
              rast1: unknown
              rast2: unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              callbackfunc: unknown
              customextent?: unknown
              distancex?: number
              distancey?: number
              extenttype?: string
              nband1: number
              nband2: number
              pixeltype?: string
              rast1: unknown
              rast2: unknown
              userargs?: string[]
            }
            Returns: unknown
          }
        | {
            Args: {
              expression: string
              extenttype?: string
              nodata1expr?: string
              nodata2expr?: string
              nodatanodataval?: number
              pixeltype?: string
              rast1: unknown
              rast2: unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              callbackfunc: unknown
              customextent?: unknown
              distancex?: number
              distancey?: number
              extenttype?: string
              pixeltype?: string
              rastbandargset: Database["public"]["CompositeTypes"]["rastbandarg"][]
              userargs?: string[]
            }
            Returns: unknown
          }
      st_mapalgebraexpr:
        | {
            Args: {
              band: number
              expression: string
              nodataval?: number
              pixeltype: string
              rast: unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              expression: string
              nodataval?: number
              pixeltype: string
              rast: unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              band1: number
              band2: number
              expression: string
              extenttype?: string
              nodata1expr?: string
              nodata2expr?: string
              nodatanodataval?: number
              pixeltype?: string
              rast1: unknown
              rast2: unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              expression: string
              extenttype?: string
              nodata1expr?: string
              nodata2expr?: string
              nodatanodataval?: number
              pixeltype?: string
              rast1: unknown
              rast2: unknown
            }
            Returns: unknown
          }
      st_mapalgebrafct:
        | {
            Args: { band: number; onerastuserfunc: unknown; rast: unknown }
            Returns: unknown
          }
        | {
            Args: {
              args: string[]
              band: number
              onerastuserfunc: unknown
              rast: unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              band: number
              onerastuserfunc: unknown
              pixeltype: string
              rast: unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              args: string[]
              band: number
              onerastuserfunc: unknown
              pixeltype: string
              rast: unknown
            }
            Returns: unknown
          }
        | {
            Args: { onerastuserfunc: unknown; rast: unknown }
            Returns: unknown
          }
        | {
            Args: { args: string[]; onerastuserfunc: unknown; rast: unknown }
            Returns: unknown
          }
        | {
            Args: { onerastuserfunc: unknown; pixeltype: string; rast: unknown }
            Returns: unknown
          }
        | {
            Args: {
              args: string[]
              onerastuserfunc: unknown
              pixeltype: string
              rast: unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              band1: number
              band2: number
              extenttype?: string
              pixeltype?: string
              rast1: unknown
              rast2: unknown
              tworastuserfunc: unknown
              userargs?: string[]
            }
            Returns: unknown
          }
        | {
            Args: {
              extenttype?: string
              pixeltype?: string
              rast1: unknown
              rast2: unknown
              tworastuserfunc: unknown
              userargs?: string[]
            }
            Returns: unknown
          }
      st_mapalgebrafctngb: {
        Args: {
          args: string[]
          band: number
          ngbheight: number
          ngbwidth: number
          nodatamode: string
          onerastngbuserfunc: unknown
          pixeltype: string
          rast: unknown
        }
        Returns: unknown
      }
      st_max4ma:
        | {
            Args: { args: string[]; matrix: number[]; nodatamode: string }
            Returns: number
          }
        | {
            Args: { pos: number[]; userargs?: string[]; value: number[] }
            Returns: number
          }
      st_maxdistance: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: number
      }
      st_mean4ma:
        | {
            Args: { args: string[]; matrix: number[]; nodatamode: string }
            Returns: number
          }
        | {
            Args: { pos: number[]; userargs?: string[]; value: number[] }
            Returns: number
          }
      st_metadata: { Args: { rast: unknown }; Returns: Record<string, unknown> }
      st_min4ma:
        | {
            Args: { args: string[]; matrix: number[]; nodatamode: string }
            Returns: number
          }
        | {
            Args: { pos: number[]; userargs?: string[]; value: number[] }
            Returns: number
          }
      st_minconvexhull: {
        Args: { nband?: number; rast: unknown }
        Returns: unknown
      }
      st_mindist4ma: {
        Args: { pos: number[]; userargs?: string[]; value: number[] }
        Returns: number
      }
      st_minimumboundingcircle: {
        Args: { inputgeom: unknown; segs_per_quarter?: number }
        Returns: unknown
      }
      st_minpossiblevalue: { Args: { pixeltype: string }; Returns: number }
      st_mlinefromtext: { Args: { "": string }; Returns: unknown }
      st_mpointfromtext: { Args: { "": string }; Returns: unknown }
      st_mpolyfromtext: { Args: { "": string }; Returns: unknown }
      st_multilinestringfromtext: { Args: { "": string }; Returns: unknown }
      st_multipointfromtext: { Args: { "": string }; Returns: unknown }
      st_multipolygonfromtext: { Args: { "": string }; Returns: unknown }
      st_nearestvalue:
        | {
            Args: {
              band: number
              columnx: number
              exclude_nodata_value?: boolean
              rast: unknown
              rowy: number
            }
            Returns: number
          }
        | {
            Args: {
              band: number
              exclude_nodata_value?: boolean
              pt: unknown
              rast: unknown
            }
            Returns: number
          }
        | {
            Args: {
              columnx: number
              exclude_nodata_value?: boolean
              rast: unknown
              rowy: number
            }
            Returns: number
          }
        | {
            Args: { exclude_nodata_value?: boolean; pt: unknown; rast: unknown }
            Returns: number
          }
      st_neighborhood:
        | {
            Args: {
              band: number
              columnx: number
              distancex: number
              distancey: number
              exclude_nodata_value?: boolean
              rast: unknown
              rowy: number
            }
            Returns: number[]
          }
        | {
            Args: {
              band: number
              distancex: number
              distancey: number
              exclude_nodata_value?: boolean
              pt: unknown
              rast: unknown
            }
            Returns: number[]
          }
        | {
            Args: {
              columnx: number
              distancex: number
              distancey: number
              exclude_nodata_value?: boolean
              rast: unknown
              rowy: number
            }
            Returns: number[]
          }
        | {
            Args: {
              distancex: number
              distancey: number
              exclude_nodata_value?: boolean
              pt: unknown
              rast: unknown
            }
            Returns: number[]
          }
      st_node: { Args: { g: unknown }; Returns: unknown }
      st_normalize: { Args: { geom: unknown }; Returns: unknown }
      st_notsamealignmentreason: {
        Args: { rast1: unknown; rast2: unknown }
        Returns: string
      }
      st_offsetcurve: {
        Args: { distance: number; line: unknown; params?: string }
        Returns: unknown
      }
      st_orderingequals: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: boolean
      }
      st_overlaps:
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
        | {
            Args: {
              nband1: number
              nband2: number
              rast1: unknown
              rast2: unknown
            }
            Returns: boolean
          }
        | { Args: { rast1: unknown; rast2: unknown }; Returns: boolean }
      st_perimeter: {
        Args: { geog: unknown; use_spheroid?: boolean }
        Returns: number
      }
      st_pixelascentroid: {
        Args: { rast: unknown; x: number; y: number }
        Returns: unknown
      }
      st_pixelascentroids: {
        Args: { band?: number; exclude_nodata_value?: boolean; rast: unknown }
        Returns: {
          geom: unknown
          val: number
          x: number
          y: number
        }[]
      }
      st_pixelaspoint: {
        Args: { rast: unknown; x: number; y: number }
        Returns: unknown
      }
      st_pixelaspoints: {
        Args: { band?: number; exclude_nodata_value?: boolean; rast: unknown }
        Returns: {
          geom: unknown
          val: number
          x: number
          y: number
        }[]
      }
      st_pixelaspolygon: {
        Args: { rast: unknown; x: number; y: number }
        Returns: unknown
      }
      st_pixelaspolygons: {
        Args: { band?: number; exclude_nodata_value?: boolean; rast: unknown }
        Returns: {
          geom: unknown
          val: number
          x: number
          y: number
        }[]
      }
      st_pixelofvalue:
        | {
            Args: {
              exclude_nodata_value?: boolean
              nband: number
              rast: unknown
              search: number
            }
            Returns: {
              x: number
              y: number
            }[]
          }
        | {
            Args: {
              exclude_nodata_value?: boolean
              nband: number
              rast: unknown
              search: number[]
            }
            Returns: {
              val: number
              x: number
              y: number
            }[]
          }
        | {
            Args: {
              exclude_nodata_value?: boolean
              rast: unknown
              search: number
            }
            Returns: {
              x: number
              y: number
            }[]
          }
        | {
            Args: {
              exclude_nodata_value?: boolean
              rast: unknown
              search: number[]
            }
            Returns: {
              val: number
              x: number
              y: number
            }[]
          }
      st_pointfromtext: { Args: { "": string }; Returns: unknown }
      st_pointm: {
        Args: {
          mcoordinate: number
          srid?: number
          xcoordinate: number
          ycoordinate: number
        }
        Returns: unknown
      }
      st_pointz: {
        Args: {
          srid?: number
          xcoordinate: number
          ycoordinate: number
          zcoordinate: number
        }
        Returns: unknown
      }
      st_pointzm: {
        Args: {
          mcoordinate: number
          srid?: number
          xcoordinate: number
          ycoordinate: number
          zcoordinate: number
        }
        Returns: unknown
      }
      st_polyfromtext: { Args: { "": string }; Returns: unknown }
      st_polygon: { Args: { band?: number; rast: unknown }; Returns: unknown }
      st_polygonfromtext: { Args: { "": string }; Returns: unknown }
      st_project: {
        Args: { azimuth: number; distance: number; geog: unknown }
        Returns: unknown
      }
      st_quantile:
        | {
            Args: {
              exclude_nodata_value: boolean
              quantile?: number
              rast: unknown
            }
            Returns: number
          }
        | {
            Args: {
              exclude_nodata_value?: boolean
              nband?: number
              quantiles?: number[]
              rast: unknown
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              exclude_nodata_value: boolean
              nband: number
              quantile: number
              rast: unknown
            }
            Returns: number
          }
        | {
            Args: { nband: number; quantile: number; rast: unknown }
            Returns: number
          }
        | {
            Args: { nband: number; quantiles: number[]; rast: unknown }
            Returns: Record<string, unknown>[]
          }
        | { Args: { quantile: number; rast: unknown }; Returns: number }
        | {
            Args: { quantiles: number[]; rast: unknown }
            Returns: Record<string, unknown>[]
          }
      st_quantizecoordinates: {
        Args: {
          g: unknown
          prec_m?: number
          prec_x: number
          prec_y?: number
          prec_z?: number
        }
        Returns: unknown
      }
      st_range4ma:
        | {
            Args: { args: string[]; matrix: number[]; nodatamode: string }
            Returns: number
          }
        | {
            Args: { pos: number[]; userargs?: string[]; value: number[] }
            Returns: number
          }
      st_rastertoworldcoord: {
        Args: { columnx: number; rast: unknown; rowy: number }
        Returns: Record<string, unknown>
      }
      st_rastertoworldcoordx:
        | { Args: { rast: unknown; xr: number }; Returns: number }
        | { Args: { rast: unknown; xr: number; yr: number }; Returns: number }
      st_rastertoworldcoordy:
        | { Args: { rast: unknown; xr: number; yr: number }; Returns: number }
        | { Args: { rast: unknown; yr: number }; Returns: number }
      st_rastfromhexwkb: { Args: { "": string }; Returns: unknown }
      st_reclass:
        | {
            Args: {
              nband: number
              nodataval?: number
              pixeltype: string
              rast: unknown
              reclassexpr: string
            }
            Returns: unknown
          }
        | {
            Args: { pixeltype: string; rast: unknown; reclassexpr: string }
            Returns: unknown
          }
        | {
            Args: {
              rast: unknown
              reclassargset: Database["public"]["CompositeTypes"]["reclassarg"][]
            }
            Returns: unknown
          }
      st_reduceprecision: {
        Args: { geom: unknown; gridsize: number }
        Returns: unknown
      }
      st_relate: { Args: { geom1: unknown; geom2: unknown }; Returns: string }
      st_removerepeatedpoints: {
        Args: { geom: unknown; tolerance?: number }
        Returns: unknown
      }
      st_resample:
        | {
            Args: {
              algorithm?: string
              maxerr?: number
              rast: unknown
              ref: unknown
              usescale?: boolean
            }
            Returns: unknown
          }
        | {
            Args: {
              algorithm?: string
              maxerr?: number
              rast: unknown
              ref: unknown
              usescale: boolean
            }
            Returns: unknown
          }
        | {
            Args: {
              algorithm?: string
              gridx?: number
              gridy?: number
              maxerr?: number
              rast: unknown
              scalex?: number
              scaley?: number
              skewx?: number
              skewy?: number
            }
            Returns: unknown
          }
        | {
            Args: {
              algorithm?: string
              gridx?: number
              gridy?: number
              height: number
              maxerr?: number
              rast: unknown
              skewx?: number
              skewy?: number
              width: number
            }
            Returns: unknown
          }
      st_rescale:
        | {
            Args: {
              algorithm?: string
              maxerr?: number
              rast: unknown
              scalex: number
              scaley: number
            }
            Returns: unknown
          }
        | {
            Args: {
              algorithm?: string
              maxerr?: number
              rast: unknown
              scalexy: number
            }
            Returns: unknown
          }
      st_resize:
        | {
            Args: {
              algorithm?: string
              maxerr?: number
              percentheight: number
              percentwidth: number
              rast: unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              algorithm?: string
              height: number
              maxerr?: number
              rast: unknown
              width: number
            }
            Returns: unknown
          }
        | {
            Args: {
              algorithm?: string
              height: string
              maxerr?: number
              rast: unknown
              width: string
            }
            Returns: unknown
          }
      st_reskew:
        | {
            Args: {
              algorithm?: string
              maxerr?: number
              rast: unknown
              skewx: number
              skewy: number
            }
            Returns: unknown
          }
        | {
            Args: {
              algorithm?: string
              maxerr?: number
              rast: unknown
              skewxy: number
            }
            Returns: unknown
          }
      st_retile: {
        Args: {
          algo?: string
          col: unknown
          ext: unknown
          sfx: number
          sfy: number
          tab: unknown
          th: number
          tw: number
        }
        Returns: unknown[]
      }
      st_roughness:
        | {
            Args: {
              interpolate_nodata?: boolean
              nband?: number
              pixeltype?: string
              rast: unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              customextent: unknown
              interpolate_nodata?: boolean
              nband: number
              pixeltype?: string
              rast: unknown
            }
            Returns: unknown
          }
      st_samealignment:
        | { Args: { rast1: unknown; rast2: unknown }; Returns: boolean }
        | {
            Args: {
              scalex1: number
              scalex2: number
              scaley1: number
              scaley2: number
              skewx1: number
              skewx2: number
              skewy1: number
              skewy2: number
              ulx1: number
              ulx2: number
              uly1: number
              uly2: number
            }
            Returns: boolean
          }
      st_segmentize: {
        Args: { geog: unknown; max_segment_length: number }
        Returns: unknown
      }
      st_setbandindex: {
        Args: {
          band: number
          force?: boolean
          outdbindex: number
          rast: unknown
        }
        Returns: unknown
      }
      st_setbandisnodata: {
        Args: { band?: number; rast: unknown }
        Returns: unknown
      }
      st_setbandnodatavalue:
        | {
            Args: {
              band: number
              forcechecking?: boolean
              nodatavalue: number
              rast: unknown
            }
            Returns: unknown
          }
        | { Args: { nodatavalue: number; rast: unknown }; Returns: unknown }
      st_setbandpath: {
        Args: {
          band: number
          force?: boolean
          outdbindex: number
          outdbpath: string
          rast: unknown
        }
        Returns: unknown
      }
      st_setgeoreference:
        | {
            Args: { format?: string; georef: string; rast: unknown }
            Returns: unknown
          }
        | {
            Args: {
              rast: unknown
              scalex: number
              scaley: number
              skewx: number
              skewy: number
              upperleftx: number
              upperlefty: number
            }
            Returns: unknown
          }
      st_setgeotransform: {
        Args: {
          imag: number
          jmag: number
          rast: unknown
          theta_i: number
          theta_ij: number
          xoffset: number
          yoffset: number
        }
        Returns: unknown
      }
      st_setm: {
        Args: { band?: number; geom: unknown; rast: unknown; resample?: string }
        Returns: unknown
      }
      st_setrotation: {
        Args: { rast: unknown; rotation: number }
        Returns: unknown
      }
      st_setscale:
        | { Args: { rast: unknown; scale: number }; Returns: unknown }
        | {
            Args: { rast: unknown; scalex: number; scaley: number }
            Returns: unknown
          }
      st_setskew:
        | { Args: { rast: unknown; skew: number }; Returns: unknown }
        | {
            Args: { rast: unknown; skewx: number; skewy: number }
            Returns: unknown
          }
      st_setsrid:
        | { Args: { geog: unknown; srid: number }; Returns: unknown }
        | { Args: { geom: unknown; srid: number }; Returns: unknown }
        | { Args: { rast: unknown; srid: number }; Returns: unknown }
      st_setupperleft: {
        Args: { rast: unknown; upperleftx: number; upperlefty: number }
        Returns: unknown
      }
      st_setvalue:
        | {
            Args: {
              band: number
              newvalue: number
              rast: unknown
              x: number
              y: number
            }
            Returns: unknown
          }
        | {
            Args: { geom: unknown; newvalue: number; rast: unknown }
            Returns: unknown
          }
        | {
            Args: {
              geom: unknown
              nband: number
              newvalue: number
              rast: unknown
            }
            Returns: unknown
          }
        | {
            Args: { newvalue: number; rast: unknown; x: number; y: number }
            Returns: unknown
          }
      st_setvalues:
        | {
            Args: {
              geomvalset: Database["public"]["CompositeTypes"]["geomval"][]
              keepnodata?: boolean
              nband: number
              rast: unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              keepnodata?: boolean
              nband: number
              newvalueset: number[]
              noset?: boolean[]
              rast: unknown
              x: number
              y: number
            }
            Returns: unknown
          }
        | {
            Args: {
              keepnodata?: boolean
              nband: number
              newvalueset: number[]
              nosetvalue: number
              rast: unknown
              x: number
              y: number
            }
            Returns: unknown
          }
        | {
            Args: {
              height: number
              keepnodata?: boolean
              nband: number
              newvalue: number
              rast: unknown
              width: number
              x: number
              y: number
            }
            Returns: unknown
          }
        | {
            Args: {
              height: number
              keepnodata?: boolean
              newvalue: number
              rast: unknown
              width: number
              x: number
              y: number
            }
            Returns: unknown
          }
      st_setz: {
        Args: { band?: number; geom: unknown; rast: unknown; resample?: string }
        Returns: unknown
      }
      st_sharedpaths: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_shortestline: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_simplifypolygonhull: {
        Args: { geom: unknown; is_outer?: boolean; vertex_fraction: number }
        Returns: unknown
      }
      st_slope:
        | {
            Args: {
              interpolate_nodata?: boolean
              nband?: number
              pixeltype?: string
              rast: unknown
              scale?: number
              units?: string
            }
            Returns: unknown
          }
        | {
            Args: {
              customextent: unknown
              interpolate_nodata?: boolean
              nband: number
              pixeltype?: string
              rast: unknown
              scale?: number
              units?: string
            }
            Returns: unknown
          }
      st_snaptogrid:
        | {
            Args: {
              algorithm?: string
              gridx: number
              gridy: number
              maxerr?: number
              rast: unknown
              scalex?: number
              scaley?: number
            }
            Returns: unknown
          }
        | {
            Args: {
              algorithm?: string
              gridx: number
              gridy: number
              maxerr?: number
              rast: unknown
              scalex: number
              scaley: number
            }
            Returns: unknown
          }
        | {
            Args: {
              algorithm?: string
              gridx: number
              gridy: number
              maxerr?: number
              rast: unknown
              scalexy: number
            }
            Returns: unknown
          }
      st_split: { Args: { geom1: unknown; geom2: unknown }; Returns: unknown }
      st_square: {
        Args: { cell_i: number; cell_j: number; origin?: unknown; size: number }
        Returns: unknown
      }
      st_squaregrid: {
        Args: { bounds: unknown; size: number }
        Returns: Record<string, unknown>[]
      }
      st_srid:
        | { Args: { geog: unknown }; Returns: number }
        | { Args: { geom: unknown }; Returns: number }
      st_stddev4ma:
        | {
            Args: { args: string[]; matrix: number[]; nodatamode: string }
            Returns: number
          }
        | {
            Args: { pos: number[]; userargs?: string[]; value: number[] }
            Returns: number
          }
      st_subdivide: {
        Args: { geom: unknown; gridsize?: number; maxvertices?: number }
        Returns: unknown[]
      }
      st_sum4ma:
        | {
            Args: { args: string[]; matrix: number[]; nodatamode: string }
            Returns: number
          }
        | {
            Args: { pos: number[]; userargs?: string[]; value: number[] }
            Returns: number
          }
      st_summary: { Args: { rast: unknown }; Returns: string }
      st_summarystats:
        | {
            Args: { exclude_nodata_value: boolean; rast: unknown }
            Returns: Database["public"]["CompositeTypes"]["summarystats"]
            SetofOptions: {
              from: "*"
              to: "summarystats"
              isOneToOne: true
              isSetofReturn: false
            }
          }
        | {
            Args: {
              exclude_nodata_value?: boolean
              nband?: number
              rast: unknown
            }
            Returns: Database["public"]["CompositeTypes"]["summarystats"]
            SetofOptions: {
              from: "*"
              to: "summarystats"
              isOneToOne: true
              isSetofReturn: false
            }
          }
      st_swapordinates: {
        Args: { geom: unknown; ords: unknown }
        Returns: unknown
      }
      st_symdifference: {
        Args: { geom1: unknown; geom2: unknown; gridsize?: number }
        Returns: unknown
      }
      st_symmetricdifference: {
        Args: { geom1: unknown; geom2: unknown }
        Returns: unknown
      }
      st_tile:
        | {
            Args: {
              height: number
              nband: number
              nodataval?: number
              padwithnodata?: boolean
              rast: unknown
              width: number
            }
            Returns: unknown[]
          }
        | {
            Args: {
              height: number
              nband: number[]
              nodataval?: number
              padwithnodata?: boolean
              rast: unknown
              width: number
            }
            Returns: unknown[]
          }
        | {
            Args: {
              height: number
              nodataval?: number
              padwithnodata?: boolean
              rast: unknown
              width: number
            }
            Returns: unknown[]
          }
      st_tileenvelope: {
        Args: {
          bounds?: unknown
          margin?: number
          x: number
          y: number
          zoom: number
        }
        Returns: unknown
      }
      st_touches:
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
        | {
            Args: {
              nband1: number
              nband2: number
              rast1: unknown
              rast2: unknown
            }
            Returns: boolean
          }
        | { Args: { rast1: unknown; rast2: unknown }; Returns: boolean }
      st_tpi:
        | {
            Args: {
              interpolate_nodata?: boolean
              nband?: number
              pixeltype?: string
              rast: unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              customextent: unknown
              interpolate_nodata?: boolean
              nband: number
              pixeltype?: string
              rast: unknown
            }
            Returns: unknown
          }
      st_transform:
        | {
            Args: { from_proj: string; geom: unknown; to_proj: string }
            Returns: unknown
          }
        | {
            Args: { from_proj: string; geom: unknown; to_srid: number }
            Returns: unknown
          }
        | { Args: { geom: unknown; to_proj: string }; Returns: unknown }
        | {
            Args: {
              algorithm?: string
              alignto: unknown
              maxerr?: number
              rast: unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              algorithm?: string
              maxerr?: number
              rast: unknown
              scalex?: number
              scaley?: number
              srid: number
            }
            Returns: unknown
          }
        | {
            Args: {
              algorithm?: string
              maxerr?: number
              rast: unknown
              scalex: number
              scaley: number
              srid: number
            }
            Returns: unknown
          }
        | {
            Args: {
              algorithm?: string
              maxerr?: number
              rast: unknown
              scalexy: number
              srid: number
            }
            Returns: unknown
          }
      st_tri:
        | {
            Args: {
              interpolate_nodata?: boolean
              nband?: number
              pixeltype?: string
              rast: unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              customextent: unknown
              interpolate_nodata?: boolean
              nband: number
              pixeltype?: string
              rast: unknown
            }
            Returns: unknown
          }
      st_triangulatepolygon: { Args: { g1: unknown }; Returns: unknown }
      st_union:
        | { Args: { geom1: unknown; geom2: unknown }; Returns: unknown }
        | {
            Args: { geom1: unknown; geom2: unknown; gridsize: number }
            Returns: unknown
          }
      st_value:
        | {
            Args: {
              band: number
              exclude_nodata_value?: boolean
              pt: unknown
              rast: unknown
              resample?: string
            }
            Returns: number
          }
        | {
            Args: {
              band: number
              exclude_nodata_value?: boolean
              rast: unknown
              x: number
              y: number
            }
            Returns: number
          }
        | {
            Args: { exclude_nodata_value?: boolean; pt: unknown; rast: unknown }
            Returns: number
          }
        | {
            Args: {
              exclude_nodata_value?: boolean
              rast: unknown
              x: number
              y: number
            }
            Returns: number
          }
      st_valuecount:
        | {
            Args: {
              exclude_nodata_value?: boolean
              nband?: number
              rast: unknown
              roundto?: number
              searchvalues?: number[]
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              exclude_nodata_value: boolean
              nband: number
              rast: unknown
              roundto?: number
              searchvalue: number
            }
            Returns: number
          }
        | {
            Args: {
              nband: number
              rast: unknown
              roundto?: number
              searchvalue: number
            }
            Returns: number
          }
        | {
            Args: {
              nband: number
              rast: unknown
              roundto?: number
              searchvalues: number[]
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: { rast: unknown; roundto?: number; searchvalue: number }
            Returns: number
          }
        | {
            Args: { rast: unknown; roundto?: number; searchvalues: number[] }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              exclude_nodata_value?: boolean
              nband?: number
              rastercolumn: string
              rastertable: string
              roundto?: number
              searchvalues?: number[]
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              exclude_nodata_value: boolean
              nband: number
              rastercolumn: string
              rastertable: string
              roundto?: number
              searchvalue: number
            }
            Returns: number
          }
        | {
            Args: {
              nband: number
              rastercolumn: string
              rastertable: string
              roundto?: number
              searchvalue: number
            }
            Returns: number
          }
        | {
            Args: {
              nband: number
              rastercolumn: string
              rastertable: string
              roundto?: number
              searchvalues: number[]
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              rastercolumn: string
              rastertable: string
              roundto?: number
              searchvalue: number
            }
            Returns: number
          }
        | {
            Args: {
              rastercolumn: string
              rastertable: string
              roundto?: number
              searchvalues: number[]
            }
            Returns: Record<string, unknown>[]
          }
      st_valuepercent:
        | {
            Args: {
              exclude_nodata_value?: boolean
              nband?: number
              rast: unknown
              roundto?: number
              searchvalues?: number[]
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              exclude_nodata_value: boolean
              nband: number
              rast: unknown
              roundto?: number
              searchvalue: number
            }
            Returns: number
          }
        | {
            Args: {
              nband: number
              rast: unknown
              roundto?: number
              searchvalue: number
            }
            Returns: number
          }
        | {
            Args: {
              nband: number
              rast: unknown
              roundto?: number
              searchvalues: number[]
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: { rast: unknown; roundto?: number; searchvalue: number }
            Returns: number
          }
        | {
            Args: { rast: unknown; roundto?: number; searchvalues: number[] }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              exclude_nodata_value?: boolean
              nband?: number
              rastercolumn: string
              rastertable: string
              roundto?: number
              searchvalues?: number[]
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              exclude_nodata_value: boolean
              nband: number
              rastercolumn: string
              rastertable: string
              roundto?: number
              searchvalue: number
            }
            Returns: number
          }
        | {
            Args: {
              nband: number
              rastercolumn: string
              rastertable: string
              roundto?: number
              searchvalue: number
            }
            Returns: number
          }
        | {
            Args: {
              nband: number
              rastercolumn: string
              rastertable: string
              roundto?: number
              searchvalues: number[]
            }
            Returns: Record<string, unknown>[]
          }
        | {
            Args: {
              rastercolumn: string
              rastertable: string
              roundto?: number
              searchvalue: number
            }
            Returns: number
          }
        | {
            Args: {
              rastercolumn: string
              rastertable: string
              roundto?: number
              searchvalues: number[]
            }
            Returns: Record<string, unknown>[]
          }
      st_voronoilines: {
        Args: { extend_to?: unknown; g1: unknown; tolerance?: number }
        Returns: unknown
      }
      st_voronoipolygons: {
        Args: { extend_to?: unknown; g1: unknown; tolerance?: number }
        Returns: unknown
      }
      st_within:
        | { Args: { geom1: unknown; geom2: unknown }; Returns: boolean }
        | {
            Args: {
              nband1: number
              nband2: number
              rast1: unknown
              rast2: unknown
            }
            Returns: boolean
          }
        | { Args: { rast1: unknown; rast2: unknown }; Returns: boolean }
      st_wkbtosql: { Args: { wkb: string }; Returns: unknown }
      st_wkttosql: { Args: { "": string }; Returns: unknown }
      st_worldtorastercoord:
        | {
            Args: { latitude: number; longitude: number; rast: unknown }
            Returns: Record<string, unknown>
          }
        | {
            Args: { pt: unknown; rast: unknown }
            Returns: Record<string, unknown>
          }
      st_worldtorastercoordx:
        | { Args: { pt: unknown; rast: unknown }; Returns: number }
        | { Args: { rast: unknown; xw: number }; Returns: number }
        | { Args: { rast: unknown; xw: number; yw: number }; Returns: number }
      st_worldtorastercoordy:
        | { Args: { pt: unknown; rast: unknown }; Returns: number }
        | { Args: { rast: unknown; xw: number; yw: number }; Returns: number }
        | { Args: { rast: unknown; yw: number }; Returns: number }
      st_wrapx: {
        Args: { geom: unknown; move: number; wrap: number }
        Returns: unknown
      }
      text_to_bytea: { Args: { data: string }; Returns: string }
      unlockrows: { Args: { "": string }; Returns: number }
      updategeometrysrid: {
        Args: {
          catalogn_name: string
          column_name: string
          new_srid_in: number
          schema_name: string
          table_name: string
        }
        Returns: string
      }
      updaterastersrid:
        | {
            Args: {
              column_name: unknown
              new_srid: number
              schema_name: unknown
              table_name: unknown
            }
            Returns: boolean
          }
        | {
            Args: {
              column_name: unknown
              new_srid: number
              table_name: unknown
            }
            Returns: boolean
          }
      urlencode:
        | { Args: { data: Json }; Returns: string }
        | {
            Args: { string: string }
            Returns: {
              error: true
            } & "Could not choose the best candidate function between: public.urlencode(string => bytea), public.urlencode(string => varchar). Try renaming the parameters or the function itself in the database so function overloading can be resolved"
          }
        | {
            Args: { string: string }
            Returns: {
              error: true
            } & "Could not choose the best candidate function between: public.urlencode(string => bytea), public.urlencode(string => varchar). Try renaming the parameters or the function itself in the database so function overloading can be resolved"
          }
    }
    Enums: {
      slctPOS: "n." | "v." | "adj." | "phr." | "adv."
      slctTags:
        | "psychology"
        | "general"
        | "philosophical"
        | "humorous"
        | "phobias"
        | "existential"
        | "obscure"
        | "romantic"
        | "new word"
        | "slang"
        | "translations"
        | "obsolete"
        | "poetic"
      werd_submission_status: "pending" | "published" | "rejected"
    }
    CompositeTypes: {
      addbandarg: {
        index: number | null
        pixeltype: string | null
        initialvalue: number | null
        nodataval: number | null
      }
      agg_count: {
        count: number | null
        nband: number | null
        exclude_nodata_value: boolean | null
        sample_percent: number | null
      }
      agg_samealignment: {
        refraster: unknown
        aligned: boolean | null
      }
      dblink_pkey_results: {
        position: number | null
        colname: string | null
      }
      geometry_dump: {
        path: number[] | null
        geom: unknown
      }
      geomval: {
        geom: unknown
        val: number | null
      }
      http_header: {
        field: string | null
        value: string | null
      }
      http_request: {
        method: unknown
        uri: string | null
        headers: Database["public"]["CompositeTypes"]["http_header"][] | null
        content_type: string | null
        content: string | null
      }
      http_response: {
        status: number | null
        content_type: string | null
        headers: Database["public"]["CompositeTypes"]["http_header"][] | null
        content: string | null
      }
      rastbandarg: {
        rast: unknown
        nband: number | null
      }
      reclassarg: {
        nband: number | null
        reclassexpr: string | null
        pixeltype: string | null
        nodataval: number | null
      }
      summarystats: {
        count: number | null
        sum: number | null
        mean: number | null
        stddev: number | null
        min: number | null
        max: number | null
      }
      unionarg: {
        nband: number | null
        uniontype: string | null
      }
      valid_detail: {
        valid: boolean | null
        reason: string | null
        location: unknown
      }
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      slctPOS: ["n.", "v.", "adj.", "phr.", "adv."],
      slctTags: [
        "psychology",
        "general",
        "philosophical",
        "humorous",
        "phobias",
        "existential",
        "obscure",
        "romantic",
        "new word",
        "slang",
        "translations",
        "obsolete",
        "poetic",
      ],
      werd_submission_status: ["pending", "published", "rejected"],
    },
  },
} as const

